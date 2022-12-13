import Menu from "../components/menu";
import { useState,useEffect,} from "react";
import { getAll, deletePokemon } from "../api/pokemon";


function Pokemon(props) {

  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const pokemonsFetched = getAll();
    pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error => console.error("Erreur avec notre API :", error.message));
  }, [count]);

  return <>
  
    <h1>Vos pokemons attrapes</h1>
    <Menu />,
   <div>
    <div class="flex">
      {
        pokemons.map((pokemon, key) => {
          return <div key={key}>
            <h3>{pokemon.name}</h3>
            <h4>{pokemon.type}</h4>
            <img className="avatar" src={pokemon.img} alt="" />
            <button onClick={()=>{deletePokemon(pokemon);setCount(count+1)}}>Relâcher !</button>
          </div>
        })}
    </div>
  </div>;
  </>
}

export default Pokemon;