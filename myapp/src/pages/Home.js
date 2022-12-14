import Menu from "../components/menu";
import "../App.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

function Home(props){
    return <div className="home">
        <Menu />
        <Row>
            <Col xs={{ span: 8, offset: 2}}>
                <div className="homeDesign">
                    <Row>
                        <Col xs={{ span: 4, offset: 4}}>
                            <h1 className="megaMargin" >Accueil</h1>
                        </Col>
                        <Col xs={{ span: 4, offset: 1}}>
                            <Row>
                                <Col className="buttonCool" xs={12}>
                                    <Link className="linkStyle" to="/pokedex">Pokedex</Link>
                                </Col>
                                <Col className="buttonCool" xs={12}>
                                    <Link className="linkStyle" to="/pokemon">Pokemon</Link>
                                </Col>
                                <Col className="buttonCool" xs={12}>
                                    <Link className="linkStyle" to="/admin">Admin</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={{ span: 4, offset: 3}}>
                            <Row>
                                <Col xs={12}>
                                    <img className="pokedeximg" src="https://www.pokepedia.fr/images/1/11/Pok%C3%A9dex-DP.png"/>
                                </Col>
                                <Col xs={12}>
                                    <img className="pokemonimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"/>
                                </Col>
                                <Col xs={12}>
                                    <img className="arceusimg" src="https://www.pokepedia.fr/images/thumb/2/26/Arceus-DEPS.png/800px-Arceus-DEPS.png"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </div>
            </Col>
        </Row>

        <footer>
            Copyright: Tom Forest & Matthieu
        </footer>
        
    </div>
}
export default Home;