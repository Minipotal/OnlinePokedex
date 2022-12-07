import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
        Route path = "/about" >
        <
        About / >
        <
        /Route> <
        Route path = "/dashboard" >
        <
        Dashboard / >
        <
        /Route> <
        /Switch> <
        /Router>
    );
}

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById("root")
);

export default App;