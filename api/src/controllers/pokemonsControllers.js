const {Pokemon,Type} = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");
const url = "https://pokeapi.co/api/v2/pokemon?limit=40";

const getApiData = async () =>{

    const databasePokemons = await Pokemon.findAll({
        include:{
            model: Type, attributes:['name'],
            through: {attributes:[]}
        }
    });
    const dataApiPokemons  = await peticion(url);
    
    if(!databasePokemons.length){
        return dataApiPokemons;
    }else{
        return databasePokemons.concat(dataApiPokemons);
    }
    
}

const peticion = async (link) =>{

    const apiUrl = await axios.get(link);
    let result = apiUrl.data.results;
    result = detailPokemon(apiUrl,result);
    return result;
}

const detailPokemon = async (apiUrl,result) => {
    if(!apiUrl.data.previous && apiUrl.data.next){
        const resultPromise = result.map(async (pokemon)=>{
            const url = await axios.get(pokemon.url);
            const data = url.data;
            const pokemonDetail = cleanObj(data);
            return pokemonDetail;
        });
    
        const dataP = Promise.all(resultPromise);
        return dataP;
    }   
}


const getPokemonById = async(id,source) => {

    try {
        
        const promise = 
        source === "api" 
            ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
                .data
            : await Pokemon.findByPk(id,
                {include:[
                    {model: Type,attributes:['name'],
                    through: {attributes:[]}},
                ],}
            );
    
        const pokemon =
            source === "api"
                ? cleanObj(promise)
                : promise;        

        if(pokemon) return pokemon;
        else throw Error("");
        
    } catch (error) {
        throw Error("Request failed with status code 404");
    }
            
}


const cleanObj = (data) =>{

    const types = data.types.map((typeName)=>{
        const name = typeName.type.name;
        return {name};
    });
    return {
         id : data.id,
         name : data.name,
         weight : data.weight,
         life : data.stats[0].base_stat,
         attack : data.stats[1].base_stat,
         defense : data.stats[2].base_stat,
         speed : data.stats[5].base_stat,
         height : data.height,
         types,
         image : data.sprites.other.dream_world.front_default,
         createdInBD: false,
    }
}


const searchPokemonByName = async (namePokemon) => {
    try {
        const urlPokemon = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)).data;
        const apiPokemons = cleanObj(urlPokemon);
        
        const pokemonBD = await Pokemon.findAll(
            {
                where:{
                    name:{
                        [Op.iLike]:`%${namePokemon}%`
                    },
                },
                include:{
                    model: Type, attributes:['name'],
                    through: {attributes:[]},
                },
            }
        );

        console.log(pokemonBD);

        return [...pokemonBD, apiPokemons];

    } catch(error) {
        
        const pokemonBD = await Pokemon.findAll(
            {where:{
                    name:{[Op.iLike]:`%${namePokemon}%`}
                },include:{
                    model: Type, attributes:['name'],
                    through: {attributes:[]}
                }
            }
        );

        if(!pokemonBD.length) throw Error("No Found");
        else return pokemonBD;
    }   
}

const createPokemon = async (name,life,attack,defense,height,weight,speed,types) => {
    const newPokemon = await Pokemon.create({name,life,attack,defense,height,weight,speed});
    await newPokemon.addTypes(types);
    return newPokemon;
}

module.exports={getApiData,searchPokemonByName,getPokemonById, createPokemon};
