import { useForm } from "react-hook-form"
import { addNewPokemonToPokedex } from "../api/pokemon"

function AddNewPokemon(props) {
    const { register, handleSubmit }= useForm();
    const onSubmit = async (data) => {
        const res = await addNewPokemonToPokedex(data);
        if(res.acknowledged){
            console.log("Insert !")
        }
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        
      <input type="hidden" {...register("oldName")} value={props.poke.name}/>
      <div>
        
          Nom du Pokémon
          <input {...register("name")} defaultValue={props.poke.name}/>
        
      </div>
      <div className="field">
        
          Type du Pokémon
          <input {...register("type")} defaultValue={props.poke.type}/>

      </div>
      <div className="field">
          Image du Pokémon
          <input {...register("img")} defaultValue={props.poke.img}/>
      </div>
      <button type="submit">Ajouter Pokémon !</button>
    </form>
} 

export default AddNewPokemon;