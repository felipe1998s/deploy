const {Type,Pokemon} = require("../db");
const axios = require("axios");
const db = require("../db");
const url = "https://pokeapi.co/api/v2/type";

const getTypesApis = async() =>{

    const dbType = await Type.findAll({
        include:{
            model: Pokemon, attributes:['name'],
            through: {attributes:[]}
    }});

    if(!dbType.length){
        await saveTypesInBD();
        return db = await Type.findAll({
            include:{
                model: Pokemon, attributes:['name'],
                through: {attributes:[]}
        }});
    }else{
        return dbType;
    }

    
}

const saveTypesInBD = async() => {
    const link = await axios.get(url);
    const data = link.data.results;

    result = data.map(async(type)=>{
        const name = type.name;
        // const types = await getPokemonByTypes(type.url);
        const newType = await Type.create({name});
        // await newType.addPokemons(types);
        return newType;
    });
}

const getTypesApi = async() => {
    try {
        const urlApi = await axios.get(url);
        const data = urlApi.data.results;
        let result = data.map(async(type)=>{
            const name = type.name;
            const [newType,created] = await Type.findOrCreate({
                where:{
                    name,
                },
            });
            return newType;
        });

        result=Promise.all(result);
        return result;

    } catch (error) {
        throw new Error(">:(")
    }
}

module.exports = {getTypesApi};