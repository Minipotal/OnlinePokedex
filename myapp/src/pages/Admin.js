import Menu from "../components/menu";
import { useState, useEffect, } from "react";
import { addToPokedex, getPokedex, UpdatePokedex, addNewPokemonToPokedex } from "../api/pokemon.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UpdatePokedex from '../components/formUpdate';

function Admin(props) {
    const [pokedex, setPokedex] = useState([]);
    useEffect(() => {
        const pokedexFetched = getPokedex();
        pokedexFetched
            .then(result => setPokedex(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);

    return <>
        <Menu />
        <h1>Gérer le pokedex global</h1>
        {/* <button onClick={()=>addNewPokemonToPokedex(pokedex)}>Ajouter un pokemon !</button> */}
        <Row xs={4} md={4}>
            {pokedex.map((poke, key) => {
                return <Col sm={3}> <div className="card" key={key}>
                    <h3>{poke.name}</h3>
                    <h4>{poke.type}</h4>
                    {<img className="avatar" src={poke.img} alt="" />}
                    <br></br>
                    <button onClick={() => addToPokedex(poke)}>Capturer !</button>
                    <br></br>
                </div>
                <UpdatePokedex poke={poke} />
                </Col>
            })}
        </Row>
    </>
}
export default Admin;