import { POKEMON_LIST, POKEMONS_SORT, POKEMONS_FILTER } from '../constants/appConstants';

export const setPokemonsList = (state = {
    viewList: [],
    pokemonList: [],
}, action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case POKEMON_LIST:
            return {...state, ...action.data};
        case POKEMONS_SORT:
            return {...state, viewList: [...action.viewList]};
        case POKEMONS_FILTER:
            return {...state, viewList: [...action.viewList]};
        default:
            return state;               
    }
};