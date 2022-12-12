import React from "react";
import ReactDOM from "react-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//App.js
function App(props) {
  return <>
    <Router>
      <Switch>
        <Route exact path="/"> {<Route path="/:id" children={<Home />} />/*ici on met l'URL dans le navigateur*/}
          <Home /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route path="/about"> {<Route path="pages/:id" children={<About />} />}
          <About />
        </Route>
        <Route path="/pokedex"> {<Route path="pages/:id" children={<Pokedex />} />}
          <Pokedex />
        </Route>
        <Route path="/pokemon"> {<Route path="pages/:id" children={<Pokemon />} />}
          <Pokemon />
        </Route>
      </Switch>
    </Router>
  </>
}

ReactDOM.render(
  <Router>
    <Home />
  </Router>,
  document.getElementById("root")
);
export default App;