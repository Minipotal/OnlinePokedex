import Menu from "../components/menu";
import { useState, useEffect, } from "react";
import { addToPokedex, getPokedex } from "../api/pokemon.js";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Pokedex(props) {
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    const pokedexFetched = getPokedex();
    pokedexFetched
      .then(result => setPokedex(result))
      .catch(error => console.error("Erreur avec notre API :", error.message));
  }, []);

  return <>
    <Menu />
    <h1>Pokedex</h1>
    <Row xs={4} md={4}>
      {pokedex.map((pokedex, key) => {
        return <Col sm={3}> <div className="card" key={key}>
          <h3>{pokedex.name}</h3>
          <h4>{pokedex.type}</h4>
          {<img className="avatar" src={pokedex.img} alt="" />}
          <br></br>
          <button onClick={() => addToPokedex(pokedex)}>Capturer !</button>
        </div>

        </Col>
      })}
    </Row>
  </>
}
export default Pokedex;