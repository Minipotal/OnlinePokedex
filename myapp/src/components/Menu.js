import {Link} from "react-router-dom";
import "../App.css";


function Menu(){
    return <nav>
        <ul>
            <li><Link to="../">Acceuil</Link></li>
            <li><Link to="../pokedex">Pokedex</Link></li>
            <li><Link to="../pokemon">Pokemon</Link></li>
            <li><Link to="../Admin">Admin</Link></li>
        </ul>
    </nav>
}
export default Menu;

