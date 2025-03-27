import { useState, useEffect } from 'react'
import './App.css'
import * as pokemonService from './services/pokemonService.js'
import PokemonList from './components/PokemonList/PokemonList.jsx';
import PokemonSearch from './components/PokemonSearch/PokemonSearch.jsx'

function App() {

  const [pokemonData, setPokemonData] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState([]);
  
  
  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await pokemonService.index();

      // const details = Promise.all( 
      //   data.map(async (pokemon) => {
      //     const pokDetails = await pokemonService.show(pokemon.url)
      //     return pokDetails
      //   }))

      const details = data.map(async (pokemon) => {
          const pokDetails = await pokemonService.show(pokemon.url)
          return pokDetails
        })


      setPokemonData(details);
      setSearchPokemon(data);
    }

    fetchDefaultData();

    
  }, [])

  console.log("details", pokemonData)
  console.log("name", searchPokemon)

  return (
    <>
      <h1>Pokedex</h1>
      {/* <button onClick={fetchData}>Fetch Pokemon</button> */}

      {/* <PokemonList pokemonData={pokemonData}/> */}

      <ul>
        {pokemonData.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>

    </>
  )
}

export default App
