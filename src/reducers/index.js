import { combineReducers } from "redux";
import { setPokemonsList as pokemons } from '../actions/setPokemonsList';
import { setPokemonsDetails as pokemonDetails } from '../actions/setPokemonDetails';
import { loadingReducer as loading } from '../actions/loading';

export default combineReducers({
    pokemons,
    pokemonDetails,
    loading,
})