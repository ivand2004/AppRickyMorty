const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const getCharDetail = (req, res) => {
    const params = req.params
    axios.get(`${URL}${params.id}`)
    .then(r => r.data)
    .then(d => {
        let character = {
            id: d.id,
            name: d.name,
            species: d.species,
            image: d.image,
            gender: d.gender,
            origin: d.origin
        }
        res.status(200).json(character)
    })
    .catch((err) => {
        res.status(500).json({error: err.message})
    })
    }

module.exports = {
    getCharDetail
}