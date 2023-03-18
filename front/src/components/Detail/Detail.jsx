import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Detail(props){
    const {detailId} = useParams();
    const [character, setCharacter] = useState("");
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    return (<div>
        <h2>NOMBRE: {character.name}</h2>
        <h4>STATUS: {character.status}</h4>
        <h4>ESPECIE: {character.species}</h4>
        <h4>GENERO: {character.gender}</h4>
        <h4>ORIGEN: {character.origin?.name}</h4>
        <img src={character.image} alt={character.name} />
    </div>)
}