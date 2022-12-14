import Menu from "../components/menu";
import { useState, useEffect, } from "react";
import { addToPokedex, getPokedex } from "../api/pokemon.js";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

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
    <Container>
    <Row xs={1} sm={2} md={3} lg={4}>
      {pokedex.map((poke, key) => {
        return <Col sm={3}> <div className="card" key={key}>
          <h3>{poke.name}</h3>
          <h4>{poke.type}</h4>
          {<img className="avatar" src={poke.img} alt="" />}
          <br></br>
          <button onClick={() => addToPokedex(poke)}>Capturer !</button>
        </div>

        </Col>
      })}
    </Row>
    </Container>
  </>
}
export default Pokedex;