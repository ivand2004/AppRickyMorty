import { connect, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { filterCards, orderCards } from "../../redux/actions";

function Favorites({myFavorites}){

    const dispatch = useDispatch();

    function onFilter(e){
        return dispatch(filterCards(e.target.value))
    }

    function onOrder(e){
        return dispatch(orderCards(e.target.value))
    }

    return <div>
        <div>
            <select name="order" id="" onChange={onOrder}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select name="filter" id="" onChange={onFilter}>
                <option value="Male">Male </option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
        {myFavorites?.map(c => 
        <div>
            <Link to={`/detail/${c.id}`}><h2>{c.name}</h2></Link>
            <img src={c.image} alt={c.name} />
            </div>
        )}
    </div>
}

export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)