import { changeLoading } from './loading';
import { POKEMON_LIST, API_URL } from '../constants/appConstants';

const handleRetrievePokemonData = () => async (dispatch) => {
    const pokemonList = await fetch(API_URL)
    .then(response => response.json())
    .then(({ results }) => {
        let promisesArray = results.map(({ url }) => {
            return fetch(url).then(response => response.json());
        })
        return Promise.all(promisesArray)
    })
    .then((data) => {
        return data;
    });

    dispatch(changeLoading(false));
    dispatch({
        type: POKEMON_LIST,
        data: {
            viewList: pokemonList,
            pokemonList,
        }
    });
}

export default handleRetrievePokemonData;