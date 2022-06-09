import { useEffect, useState } from "react"

function ConsumirApi() {

const [pokemon, setPokemon] = useState([])

const getFetch = async () => {
    try{
        const queryFetch = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const queryFetchParse = await queryFetch.json()
        setPokemon(queryFetchParse.results)
    } catch (err) {
        console.log(err)
    }
}

useEffect(() => {
    getFetch()
    .finally(console.log("listo"))        
},[])

    return (
        <>
        <h1>Pokemones</h1>
        <ul>
        {pokemon.map(poke => <li key={poke.name}>{poke.name}</li> )}
        </ul>
        </>

    )

}

export default ConsumirApi