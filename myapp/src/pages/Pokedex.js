import Menu from "../components/menu";
import { useState, useEffect, } from "react";
import { addToPokedex,getPokedex } from "../api/pokemon.js";
import "../App.css";
import Card from "./Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "40px",
      paddingRight: "40px"
    }
  });

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
            <div class="flex">
                {pokedex.map((pokedex, key) => {
                    return <div key={key}>
                        <h3>{pokedex.name}</h3>
                        <h4>{pokedex.type}</h4>
                        { <img className="avatar" src={pokedex.img} alt="" /> }
                        <br></br>
                        <button onClick={()=>addToPokedex(pokedex)}>Capturer !</button>
                    </div>
                })}
            </div>;

        </>

        /*
        
<Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
    </Grid>




        */
}
export default Pokedex;