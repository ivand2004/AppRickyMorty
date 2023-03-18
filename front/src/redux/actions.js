import axios from "axios";

export function addFavorite(character){
    axios.post("http://localhost:3001/rickandmorty/fav", character)
    return{
        type: "ADD_FAVORITE",
        payload: character
    }
}

export function deleteFavorite(id){
    axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
    return{
        type: "DELETE_FAVORITE",
        payload: id
    }
}

export function filterCards(status){
    return{
        type: "FILTER",
        payload: status
    }
}

export function orderCards(id){
    return{
        type: "ORDER",
        payload: id
    }
}