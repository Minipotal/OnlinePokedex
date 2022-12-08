import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Pokedex from "./pages/Pokedex";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//App.js
function App(props){
  return <Router>
      <Switch>
        <Route exact path="/"> {<Route path="/:id" children={<Home />} />/*ici on met l'URL dans le navigateur*/}
          <Home /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route path="/about"> {<Route path="pages/:id" children={<About />} />}
          <About />
        </Route>
        <Route path="/pokedex"> {<Route path="pages/:id" children={<Pokedex />} />}
          <Dashboard />
        </Route>
      </Switch>
  </Router>
}

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById("root")
);

export default App;