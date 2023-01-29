const { Router } = require('express');
const pokemonsRouter = require('./pokemonsRouter');
const typesRouter = require('./typesRouter');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// mainRouter.use("/posts", typeof);

mainRouter.use("/pokemons", pokemonsRouter);
mainRouter.use("/types",typesRouter);

module.exports = mainRouter;
