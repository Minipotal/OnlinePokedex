import {Link} from "react-router-dom";
function Menu(){
    return <nav>
        <ul>
            <li><Link to="../Home">Acceuil</Link></li>
            <li><Link to="../Pokedex">Pokedex</Link></li>
            <li><Link to="../Caught">Pokemon attrapé !</Link></li>
            <li><Link to="../About">A propos</Link></li>
        </ul>
    </nav>
}
export default Menu;