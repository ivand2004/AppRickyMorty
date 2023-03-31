const {Favorite } = require("../DB_connection");

const postFav = async(req, res) => {
    try{
    const {id, name, status, species, gender, origin, image} = req.body;
    if(!id || !name || !status || !species || !image || !gender) return res.status(400).send("Faltan datos")
    const favorite = await Favorite.create({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image
    })
    return res.status(200).json(favorite)
}   catch (err){
    return res.status(404).json({message: err.message})
}
}

module.exports = postFav