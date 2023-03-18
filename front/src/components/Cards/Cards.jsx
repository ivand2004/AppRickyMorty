import Card from "../Card/Card";
import s from "./Cards.css"

export default function Cards(props) {
   return <div className="cards">
      {props.characters.map((c, k) => <Card key={k} id={c.id} name={c.name} species={c.species} gender={c.gender} image={c.image} onClose={props.onClose}/>)}
   </div>;
}
