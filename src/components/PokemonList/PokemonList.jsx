import PokemonCard from "../PokemonCard/PokemonCard.jsx";

const PokemonList = ({pokemonData}) => {
    return (
        <>
            <h2>List of Pokemon</h2>

            <ul>
                {pokemonData.map((pokemon) => (
                    
                    <li key={pokemon.id}>
                        <PokemonCard pokemon={pokemon}/>
                    </li>
                ))}
            </ul>
        </>

    )
}

export default PokemonList;