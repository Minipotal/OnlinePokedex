import { useState, useEffect, useParams, useForm, getOne } from "react";
import { updatePokedex } from "../api/pokemon"

function UpdatePokedex(props) {
    const [pokedex, setPokedex] = useState(null);
    let { id } = useParams();
    const { register, handleSubmit }= useForm();
    const onSubmit = async (data) => {
        const res = await updatePokedex(data);
        if(res.acknowledged){
            console.log("updated !")
        }
    }
  
    useEffect(() => {
      const pokedexFetched = getOne(id);
      pokedexFetched
        .then(result => setPokedex(result))
        .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);

    return <form onSubmit={handleSubmit(onSubmit)}>
      <div className="pokemon-list">
        
          Nom du Pokémon
          <input {...require("name")} defaultValue={pokedex.name}/>
        
      </div>
      <div className="field">
        
          Type du Pokémon
          <input {...require("type")} defaultValue={pokedex.type}/>
          
      </div>
      <div className="field">
          Image du Pokémon
          <input {...require("img")} defaultValue={pokedex.img}/>
      </div>
      <button type="submit" value="Ajouter un nouveau Pokémon dans la liste Pokédex" />
    </form>
}

export default UpdatePokedex;