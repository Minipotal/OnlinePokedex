import onSubmit from "../../../back/index"

<form method="post" action="/sessions" onSubmit={this.handleSubmit}>
  <p className="field">
    <label>
      Nom du Pokémon
      <input
        type="pokemonName"
        name="pokemonName"
        required
        autoFocus
        value={this.state.pokemonName}
        onChange={this.handleFieldChange}
      />
    </label>
  </p>
  <p className="field">
    <label>
      Type du Pokémon
      <input
        type="type"
        name="type"
        required
        value={this.state.type}
        onChange={this.handleFieldChange}
      />
    </label>
  </p>
  <p>
  </p>
  <p className="field">
    <label>
      Image du Pokémon
      <input
        type="pokemonImg"
        name="pokemonImg"
        required
        autoFocus
        value={this.state.pokemonImg}
        onChange={this.handleFieldChange}
      />
    </label>
  </p>
  <button type="submit" value="Ajouter un nouveau Pokémon dans la liste Pokédex" />
</form>