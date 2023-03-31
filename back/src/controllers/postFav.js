const {Favorite } = require("../DB_connection");

const postFav = async(req, res) => {
    try{
    const {name, status, species, gender, origin, image} = req.body;
    if(!name || !status || !species || !image || !gender || !origin) return res.status(401).json({message: "Faltan datos"})
    await Favorite.findOrCreate({ where: 
        {name,
        status,
        species,
        gender,
        origin,
        image}
    })
    const favorites = await Favorite.findAll()
    return res.status(200).json(favorites)
}   catch (err){
    return res.status(500).json({message: err.message})
}
}

module.exports = postFav