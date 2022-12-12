import Menu from "../components/menu";
import { useState, useEffect, } from "react";
import { addToPokedex,getPokedex } from "../api/pokemon.js";

function Pokedex(props) {
    const [pokedex, setPokedex] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
        // récupérer la liste des users seulement au chargement du composant ! 
        const pokedexFetched = getPokedex();
        pokedexFetched
            .then(result => setPokedex(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);

    return <div><h1>Pokedex</h1>
        <Menu />
        <div>
            <div class="flex">
                {pokedex.map((pokedex, key) => {
                    return <div key={key}>
                        <h3>{pokedex.name}</h3>
                        <h4>{pokedex.type}</h4>
                        { <img className="avatar" src={pokedex.img} /> }
                        <button onClick={()=>addToPokedex(pokedex)}>Capturer !</button>
                    </div>
                })}
            </div>
        </div>
    </div>;
}

export default Pokedex;