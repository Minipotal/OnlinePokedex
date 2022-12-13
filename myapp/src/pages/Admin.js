import Menu from "../components/menu";
import { useState, useEffect, } from "react";
import { addToPokedex, getPokedex, updateTypePokedex } from "../api/pokemon.js";
import "../App.css";

function Admin(props) {
    const [pokedex, setPokedex] = useState([]);
    useEffect(() => {
        const pokedexFetched = getPokedex();
        pokedexFetched
            .then(result => setPokedex(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);

    return <>
        <Menu />
        <h1>Page administrateur</h1>
        
            <div class="flex">
                {pokedex.map((pokedex, key) => {
                    return <div key={key}>
                        <h3>{pokedex.name}</h3>
                        <h4>{pokedex.type}</h4>
                        { <img className="avatar" src={pokedex.img} alt="" /> }
                        <br></br>
                        <button onClick={()=>addToPokedex(pokedex)}>Capturer !</button>
                        <br></br>
                        <button onClick={()=>updateTypePokedex(pokedex)}>Changer type !</button>
                    </div>
                })}
            </div>;
        </>
}

export default Admin;