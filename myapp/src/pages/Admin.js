import Menu from "../components/menu";
import { useState, useEffect, } from "react";
import { addToPokedex, getPokedex } from "../api/pokemon.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import UpdatePokedex from '../components/formUpdate';
import AddNewPokemon from "../components/addPokemon";

function Admin(props) {
    const [poke, setPokedex] = useState([]);
    useEffect(() => {
        const pokedexFetched = getPokedex();
        pokedexFetched
            .then(result => setPokedex(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);

    return <>
        <Menu />
        <h1>Gérer le pokedex global</h1>
        <AddNewPokemon poke={poke}/>
        <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
            {poke.map((poke, key) => {
                return <Col sm={3}> <div className="card" key={key}>
                    <h3>{poke.name}</h3>
                    <h4>{poke.type}</h4>
                    {<img className="avatar" src={poke.img} alt="" />}
                    <br></br>
                    <button onClick={() => addToPokedex(poke)}>Capturer !</button>
                    <br></br>
                    <UpdatePokedex poke={poke} />
                </div>
                
                </Col>
            })}
        </Row>
        </Container>
    </>
}
export default Admin;