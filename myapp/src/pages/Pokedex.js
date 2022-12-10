//afficher tout le pokedex enregistrer

export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
}
// a travailler pour afficher les pokemon du ficvhier pokemon.js 