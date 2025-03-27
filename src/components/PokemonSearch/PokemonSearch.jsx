import {useState} from 'react'

const PokemonSearch = (props) => {
    
    const [searchPokemon, setSearchPokemon] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchData(searchPokemon)
        setSearchPokemon('')
    }

    return (
        <section>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='pokemon'>Search:</label>
                <input
                    id='pokemon'
                    type="text"
                    value={searchPokemon}
                    onChange={(e) => setSearchPokemon(e.target.value)}
                />
                <button type='submit'>Search</button>
            </form>
        </section>
    )
} 

export default PokemonSearch;