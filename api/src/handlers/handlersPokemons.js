const axios = require('axios');
const Pokemon = require('../models/Pokemon');
const Type = require('../models/Type');
const {getApiData,searchPokemonByName,getPokemonById, createPokemon} = require("../controllers/pokemonsControllers");

const getPokemonsHandler = async (req,res) =>{

    const {name} = req.query;

    try {    
        const result = name ? await searchPokemonByName(name) : await getApiData();
        res.status(200).json(result);    
    } catch (error) {
        res.status(404).json({error:error.message});
    }
    
};

const getPokemonByIdHandler = async (req,res) => {
    const {id} = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const pokemon = await getPokemonById(id,source);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(404).json({error:error.message});
    }
};

const postPokemonsHandler = async (req,res) => {
    const {name,life,attack,defense,height,weight,speed,types} = req.body;
    try {
        await createPokemon(name,life,attack,defense,height,weight,speed,types);
        res.status(201).json({msj: "creado exitosamente"});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports={getPokemonsHandler, getPokemonByIdHandler, postPokemonsHandler}