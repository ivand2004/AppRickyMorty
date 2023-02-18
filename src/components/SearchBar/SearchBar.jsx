import { useState } from "react";

export default function SearchBar(props) {
   const [character, setCharacter] = useState("");

   function onChangeName(e){
      setCharacter(e.target.value)
   }
   return (
      <div>
         <input type='search' onChange={onChangeName}/>
      <button onClick={() => props.onSearch(character)}>Agregar</button>
      <button onClick={() => props.onSearch(Math.floor(Math.random() * 827) + 1)}>Agregar Random</button> {/*Codigo del Extra del 08, agarra un numero de 1 a 826 */}
      </div>
   );
}
