import logo from './logo.svg';
import './App.css';

function App() {
    return (
        //mettre le routeur
        <
        Router >
        <
        Switch >
        <
        Route exact path = "/" > { /*ici on met l'URL dans le navigateur*/ } <
        Home / > { /*ici on donne la page à afficher en fonction de cette URL*/ } <
        /Route> <
        Route path = "/Caught" >
        <
        About / >
        <
        /Route> <
        Route path = "/Pokedex" >
        <
        Dashboard / >
        <
        /Route> < /
        Switch > <
        /Router>
    );
}

export default App;