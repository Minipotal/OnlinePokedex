/*import { useEffect } from "react";
import { useState } from "react";

const [ pokemons, setPokemons ] = useState([]);

//va s'executer seulement au lancement du composant (dep: [])
useEffect(() => {
  // récupérer la liste des users seulement au chargement du composant ! 
  const pokemonsFetched = getAll();
  pokemonsFetched
    .then(result => setPokemons(result))
    .catch(error=>console.error("Erreur avec notre API :",error.message));
},[]);*/

function Caught(props) {
  return <h1>Vos pokemons attrapes</h1>;/*
  <div className="pokemon-list">
    <div class="flex">
      {
        pokemons.map((pokemon, key) => {
          return <div key={key} className="bloc-pokemon">
            <img className="avatar" src={pokemon.img} />
            <h2>{pokemon.name}</h2>
            <h2>{pokemon.type}</h2>
            <button onClick={() => addToPokedex(pokemon._id)}>Capturer !</button>
          </div>
        })
      }
    </div>
  </div>;*/
}

export default Caught;