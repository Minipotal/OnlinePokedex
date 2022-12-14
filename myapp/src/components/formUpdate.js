import { useState, useEffect, useParams, getOne } from "react";
import { useForm } from "react-hook-form"
import { updatePokedex } from "../api/pokemon"

function UpdatePokedex(props) {
    const { register, handleSubmit }= useForm();
    const onSubmit = async (data) => {
        const res = await updatePokedex(data);
        if(res.acknowledged){
            console.log("updated !")
        }
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        
      <input type="hidden" {...register("oldName")} value={props.poke.name}/>
      <div className="pokemon-list">
        
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
      <input type="submit" value="Modifier" />
    </form>
} 

export default UpdatePokedex;