import onSubmit from "../../../back/index"
import { onSubmit } from "../api/pokemon"

<form onSubmit={handleSubmit(onSubmit)}>
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