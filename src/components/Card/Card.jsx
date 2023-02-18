import s from "./Card.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useEffect, useState } from "react";

export function Card(props) {
   const [isFav, setIsFav] = useState(false)
   let {addFavorite, deleteFavorite, myFavorites} = props
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         deleteFavorite(props.id)
      }else{
         setIsFav(true)
         addFavorite(props)
      }
   }

   return (
      <div className="card">
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
      }
         <button onClick={() => props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}><h2>{props.name}</h2></Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img src={props.image} alt={props.name} />
      </div>
   );
}

export function mapStateToProps(state){
   return {
      myFavorites: [...state.myFavorites]
   }
}


export function mapDispatchToProps(dispatch){
   return{
      addFavorite: function(character) {dispatch(addFavorite(character))},
      deleteFavorite: function(id) {dispatch(deleteFavorite(id))},
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);