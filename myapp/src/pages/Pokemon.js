import Menu from "../components/menu";
import { useState,useEffect,} from "react";
import { getAll, deletePokemon } from "../api/pokemon";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
    <Menu />
    <h1>Vos pokemons attrapes</h1>
    <Container>
    <Row xs={1} md={4}>
      {pokemons.map((pokemon, key) => {
        return <Col sm={3}> <div className="card" key={key}>
          <h3>{pokemon.name}</h3>
          <h4>{pokemon.type}</h4>
          {<img className="avatar" src={pokemon.img} alt="" />}
          <br></br>
          <button onClick={()=>{deletePokemon(pokemon);setCount(count+1)}}>Relâcher !</button>
        </div>

        </Col>
      })}
    </Row>
    </Container>
  </>
}

export default Pokemon;