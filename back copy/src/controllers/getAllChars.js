const {Character} = require("../DB_connection")

async function getAllChars(req, res){
    try{
        const characters = await Character.findAll();
        return res.status(200).json(characters)
    }catch(err){
        return res.status(404).json({message: err.message})
    }
}

module.exports = getAllChars