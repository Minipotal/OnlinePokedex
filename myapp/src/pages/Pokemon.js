import Menu from "../components/menu";
import { useState,useEffect,} from "react";
import { getAll,addToPokedex } from "../api/pokemon";
//afficher tout les pokemons capturés avec un filtre


function Pokemon(props) {

  const [pokemons, setPokemons] = useState([]);
  
  //va s'executer seulement au lancement du composant (dep: [])
  useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();
    pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error => console.error("Erreur avec notre API :", error.message));
  }, []);

  return <>
  
    <h1>Vos pokemons attrapes</h1>
    <Menu />,
   <div className="pokemon-list">
    <div class="flex">
      {
        pokemons.map((pokemon, key) => {
          return <div key={key} className="bloc-pokemon">
            <h2>{pokemon.name}</h2>
            <h3>{pokemon.type}</h3>
            <button onClick={()=>addToPokedex(pokemon)}>Capturer !</button>
            { <img className="avatar" src={pokemon.img} /> }
          </div>
        })
      }
    </div>
  </div>;
  </>
}

export default Pokemon;