import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const GET_POKEMON_BY_SOURCE = "GET_POKEMON_BY_SOURCE";
export const GET_POKEMON_BY_TYPE = "GET_POKEMON_BY_TYPE";
export const GET_POKEMON_TYPES = "GET_POKEMON_TYPES";
export const SORT_AND_FILTER_BY_HP = "SORT_AND_FILTER_BY_HP";
export const SORT_BY_AlPHABET = "SORT_BY_AlPHABET";

export const getPokemons = () =>{
    return async function(dispatch){
        const serverData = await axios.get("http://localhost:3001/pokemons");
        const pokemons = serverData.data;
        console.log(pokemons);
        dispatch({type:GET_POKEMONS,payload:pokemons});
    };
};

export const getPokemonById = (id) => {
    return async function(dispatch){
        const serverData = await axios.get(`http://localhost:3001/pokemons/${id}`);
        const pokemonDetails = serverData.data;
        dispatch({type:GET_POKEMON_BY_ID,payload:pokemonDetails});
    }
}

export const getPokemonByName = (name) =>{
        name = name.toLowerCase();
        return async function(dispatch){
            await axios.get(`http://localhost:3001/pokemons?name=${name}`)
            .then((response)=>{
                const pokemon = response.data;
                dispatch({type:GET_POKEMON_BY_NAME,payload:pokemon});
            }).catch(((error)=>{
                dispatch({type:GET_POKEMON_BY_NAME,payload:"Not found"});
            }))
            // const pokemon = serverData.data;
            // console.log(pokemon);
            
        }
        
}

export const getPokemonTypes = () =>{
    return async function(dispatch){
        const serverData = await axios.get("http://localhost:3001/types");
        const types = serverData.data;
        dispatch({type:GET_POKEMON_TYPES,payload:types});
    }
}

export const getPokemonBySource = (source) =>{
    return {type:GET_POKEMON_BY_SOURCE,payload:source};
};

export const getPokemonByTypes = (type) =>{
    return {type:GET_POKEMON_BY_TYPE,payload:type};
}

export const sortByHP = (option) =>{
    return {type:SORT_AND_FILTER_BY_HP,payload:option};
}

export const sortByAlphabet = (option) => {
    return {type:SORT_BY_AlPHABET,payload:option};
}