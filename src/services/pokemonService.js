const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

const index = async () => {
    try {
        // const queryString = `${pokemon}`;
        const res = await fetch(BASE_URL)
        const data = await res.json();
        // console.log('Data', data)
        return data;
    } catch (err) {
        console.log(err);
    }
};

// index('ditto');

export {index}