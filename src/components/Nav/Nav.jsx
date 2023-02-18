import SearchBar from "../SearchBar/SearchBar";
import s from "./Nav.css"
import { Link } from "react-router-dom";

export default function Nav(props){

    return(
        <div className="nav">
            <Link to="/home"><h3 className="links">Home</h3></Link>
            <Link to="/about"><h3 className="links">About</h3></Link>
            <Link to="/favorites"><h3 className="links">Favorites</h3></Link>
            <h3 onClick={props.logout}>Logout</h3> {/*Codigo del extra 09 */}
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}
