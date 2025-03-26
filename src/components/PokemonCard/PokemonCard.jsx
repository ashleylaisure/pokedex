
const PokemonCard = (props) => {
    return (
        <>
            <p>{props.pokemon.name}</p>
            <p>{props.pokemon.id}</p>
            <img src={props.pokemon.sprites.other.dream_world.front_default} alt={props.pokemon.name} ></img>
        </>

    )
}

export default PokemonCard;