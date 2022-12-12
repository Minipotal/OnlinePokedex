
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

export const addToPokedex = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokedex/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(pokemon)
        }
    )
    const pokedex = await response.json()
    return pokedex
}

export const getPokedex = async () => {
    const response = await fetch(
        'http://localhost:4444/pokedex/list', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
    const pokedex = await response.json()
    return pokedex
}





export const addToPokemon = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(pokemon)
        }
    )
    const pokedex = await response.json()
    return pokedex
}


export const deletePokemon = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/delete', {
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "img":pokemon.img,
                "name":pokemon.name,
                "type":pokemon.type
            })
        }
    )
    const pokemonDelete = await response.json()
    return pokemonDelete
}




export const updateTypePokedex = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/update', {
            method: 'UPDATE', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "type":pokemon.type
            })
        }
    )
    const updateTypePokedex = await response.json()
    return updateTypePokedex
}