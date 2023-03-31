const {Favorite} = require("../DB_connection");

const deleteFav = async (req, res) => {
    try {
        const {id} = req.params
        const favoriteDel = await Favorite.findByPk(id)
        if(!favoriteDel) return res.status(404).send(`No hay un personaje con el id ${id}`)
        favoriteDel.destroy();
        const favorites = await Favorite.findAll()
        return res.status(200).json(favorites)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = deleteFav