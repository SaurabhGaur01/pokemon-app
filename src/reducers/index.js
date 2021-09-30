import { combineReducers } from "redux";
import { pokemonsReducer as pokemons } from '../actions/pokemons';
import { detailReducer as detail } from '../actions/detail';
import { filterReducer as filter } from '../actions/filter';
import { filterNameReducer as filterName } from '../actions/filterName';
import { loadingReducer as loading } from '../actions/loading';
import { messageReducer as message } from '../actions/message';

export default combineReducers({
    pokemons,
    detail,
    filter,
    filterName,
    loading,
    message,
})