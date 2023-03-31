const axios = require("axios")
const {Character} = require('../DB_connection');
const URL = "https://rickandmortyapi.com/api/character?page="


const getApiData = async () => {
    let allCharactersInfoApi = [];
    try {
        for (let i=1;i<6;i++) {
            const apiData = await axios(`${URL}${i}`);
            allCharactersInfoApi.push(apiData)
        }
        allCharactersInfoApi = await Promise.all(allCharactersInfoApi);
        let allCharactersInfoApi2 = allCharactersInfoApi.map(r => r.data.results.map(c => {
            return {
                id: c.id,
                name: c.name,
                species: c.species,
                status: c.status,
                origin: c.origin.name,
                gender: c.gender,
                image: c.image
            }
        }))
        let allCharacters = allCharactersInfoApi2.flat()
        return allCharacters;
    } catch (error) {
        return {error: error.message}
    }
}

const saveApiData = async () => {
    try {
        const characterAll = await getApiData();
        await Character.bulkCreate(characterAll)
    } catch (error) {
        return {error: error.message}
    }
}

module.exports = saveApiData