const initialState = {
    myFavorites: [],
    allCharacters: [],
}


export default function rootReducer(state = initialState, action){
    switch(action.type){
        case "ADD_FAVORITE":
            return{
                ...state,
                myFavorites : [...state.myFavorites, action.payload],
                allCharacters : [...state.allCharacters, action.payload]
            }
        case "DELETE_FAVORITE":
            return{
                ...state,
                myFavorites : state.myFavorites.filter(c => c.id !== action.payload)
            }
        case "FILTER":
            const copyAll = [...state.allCharacters]
            const filtered = copyAll.filter(c => c.gender === action.payload)
            return{
                ...state,
                myFavorites: filtered
            }
        case "ORDER":
            const orderChar = state.allCharacters.sort((a,b) => {
                if(action.payload === "Ascendente"){
                    if(a.id < b.id) return -1
                    if(b.id < a.id) return 1
                } else if (action.payload === "Descendente"){
                    if(a.id < b.id) return 1
                    if(b.id < a.id) return -1
                }
                return 0
            })
            return{
                ...state,
                myFavorites: [...orderChar]
            }
        default: 
            return {...state}
    }
}