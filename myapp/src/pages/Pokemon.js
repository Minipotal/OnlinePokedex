import Menu from "../components/menu";
import { useState,useEffect,} from "react";
import { getAll, deletePokemon } from "../api/pokemon";
//afficher tout les pokemons capturés avec un filtre


function Pokemon(props) {

  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(0);
  
  //va s'executer seulement au lancement du composant (dep: [])
  useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();
    pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error => console.error("Erreur avec notre API :", error.message));
  }, [count]);

  return <>
  
    <h1>Vos pokemons attrapes</h1>
    <Menu />,
   <div className="pokemon-list">
    <div class="flex">
      {
        pokemons.map((pokemon, key) => {
          return <div key={key} className="bloc-pokemon">
            <h3>{pokemon.name}</h3>
            <h4>{pokemon.type}</h4>
            <img className="avatar" src={pokemon.img} />
            <button onClick={()=>{deletePokemon(pokemon);setCount(count+1)}}>Relâcher !</button>
          </div>
        })}
    </div>
  </div>;
  </>
}

export default Pokemon;