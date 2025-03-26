import { useState, useEffect } from 'react'
import './App.css'
import * as pokemonService from './services/pokemonService.js'
import PokemonList from './components/PokemonList/PokemonList.jsx';

function App() {

  const [pokemonData, setPokemonData] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState([]);
  
  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await pokemonService.index();
      console.log('Data2', data)

      setPokemonData(data);
      setSearchPokemon(data);
    }
    fetchDefaultData();

    
  }, [])

  console.log("pokemonData", pokemonData)

  return (
    <>
      <h1>Pokedex</h1>
      
      {/* <PokemonList pokemonData={pokemonData}/> */}

      <ul>
        {pokemonData.map((pokemon) => (
          <li key={pokemon.id}>
              <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>

    </>
  )
}

export default App
