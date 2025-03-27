
const PokemonCard = ({pokemon}) => {
    
    return (
        <>
            <h2>Pokemon Details</h2>
            <p>{pokemon.id}</p>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
        </>

    )
}

export default PokemonCard;