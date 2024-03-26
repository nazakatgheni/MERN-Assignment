import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Pokemon = () => {
    const [pokemonName, setPokemonName] = useState([]);

    // useEffect(() => {
    //     axios.get('https://pokeapi.co/api/v2/pokemon')
    //         .then(res => {
    //             setPokemonName(res.data.name)
    //             console.log(res.data.name)
    //         })
    //         .catch(err => {
    //             console.log(err.data.name)
    //         })
    // }, [])

    const getPokName = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => {
                console.log(res.data.results)
                setPokemonName(res.data.results)

            })
            .catch(err => {
                console.log(err.data.results)
            })
    }


    return (
        <div>
            <h2>List Of Pokemon</h2>
            <button onClick={getPokName}>Fetch Pokemon</button>
            <ul>
                {pokemonName.map((pokemon, idx) => {
                    return <p key={idx}>Pokemon name: {pokemon.name}</p>
                })}
            </ul>
        </div>
    )
}

export default Pokemon
