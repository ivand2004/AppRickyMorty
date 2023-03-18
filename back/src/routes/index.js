let { Router } = require("express")
let { getCharById } = require("../controllers/getCharById")
let { getCharDetail } = require("../controllers/getCharDetail")
const router = Router()
let {favs} = require("../utils/favs")

router.get("/onsearch/:id", getCharById)
router.get("/detail/:id", getCharDetail)

router.get("/fav", (req, res) => {
    res.status(200).json(favs)
})

router.post("/fav", (req, res) => {
    const {id, name, species, image, gender} = req.body;
    console.log(req.body);
    if(!id || !name || !species || !image || !gender) return res.status(404).send("Faltan datos")
    else{
    const character = {
        id,
        name,
        species,
        image,
        gender
    }
    favs.push(character)
    res.status(200).json(favs)
}
})

router.delete("/fav/:id", (req, res) =>{
    const {id} = req.params;
    const characterDelete = favs.filter(f => f.id !== Number(id));
    favs = characterDelete
    res.status(200).send("Se elimino el personaje correctamente")
})

module.exports = {
    router
}