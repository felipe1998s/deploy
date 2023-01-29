const {getTypesApi} = require("../controllers/typesControllers");


const getTypesHandler = async (req,res) => {

    try {
        const result = await getTypesApi();
        res.status(200).json(result);
    } catch (error) {
       res.status(404).json({error:error.message}); 
    }
}

module.exports = getTypesHandler;