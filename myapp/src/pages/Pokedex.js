import Menu from "../components/menu";
import { useState, useEffect, } from "react";
import { getPokedex } from "../api/pokemon.js";

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
                        <h2>{pokedex.name}</h2>
                        <h3>{pokedex.type}</h3>
                        { <img className="avatar" src={pokedex.img} /> }
                    </div>
                })}
            </div>
        </div>
    </div>;
}

export default Pokedex;