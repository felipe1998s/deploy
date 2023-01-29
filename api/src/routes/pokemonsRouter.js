const {Router} = require("express");
const {getPokemonsHandler,getPokemonByIdHandler, postPokemonsHandler} = require("../handlers/handlersPokemons");


const pokemonsRouter = Router();

pokemonsRouter.get("/",getPokemonsHandler);

pokemonsRouter.get("/:id",getPokemonByIdHandler);

pokemonsRouter.post("/", postPokemonsHandler);

module.exports=pokemonsRouter;