const MAX_POKEMON = 5;
const BASE_URL = `https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`

const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json();
        // console.log('Data', data.results)
        return data.results;
    } catch (err) {
        console.log(err);
    }
};

const show = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json();
        // console.log("pokemondata", data)
        return data;
    } catch (err) {
        console.log(err)
    }
}

export {index, show}