import { POKEMON_DETAILS } from '../constants/appConstants';

export const setPokemonsDetails = (state = {}, action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case POKEMON_DETAILS:
            return action.details;
        default:
            return state;               
    }
};