import { POKEMONS_FILTER } from '../constants/appConstants';

const filterPokemons = value => (dispatch, getState) => {
    const { pokemonList } = getState().pokemons;
    const inputValue = value.toLowerCase();
    const filteredData = pokemonList.filter(pokemons => pokemons.name === inputValue || pokemons.abilities.includes(inputValue));
    if(filteredData.length > 0) {
        dispatch({
            type: POKEMONS_FILTER,
            viewList: filteredData,
        })
    } else {
        dispatch({
            type: POKEMONS_FILTER,
            viewList: pokemonList,
        })
    }    
}

export default filterPokemons;