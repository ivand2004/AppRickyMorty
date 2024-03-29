let { Router } = require("express")
let { getCharById } = require("../controllers/getCharById")
let { getCharDetail } = require("../controllers/getCharDetail")
let getAllChars = require("../controllers/getAllChars")
const router = Router()
const postFav = require("../controllers/postFav")
const getFavorites = require("../controllers/getFavorite")
const deleteFav = require("../controllers/deleteFav")
const login = require("../controllers/login")
const postUser = require("../controllers/postUser")

router.get("/onsearch/:id", getCharById)
router.get("/detail/:id", getCharDetail)
router.get('/login', login)
router.post('/login', postUser)
router.get("/fav", getFavorites)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)
router.get("/allCharacters", getAllChars)

module.exports = {
    router
}