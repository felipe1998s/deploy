const {Router} = require("express");
const getTypesHandler = require("../handlers/handlersTypes");

const typesRouter = Router();

typesRouter.get("/",getTypesHandler)

module.exports = typesRouter;