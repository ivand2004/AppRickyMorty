const {Favorite} = require("../DB_connection")

const getFavorites = async (req, res) => {
    try {
        let favs =  await Favorite.findAll()
        if(favs.length === 0) return res.status(404).json({message: "No hay favoritos"})
        return res.status(200).json(favs)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = getFavorites