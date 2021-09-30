const CREATE_POKE = 'CREATE_POKE';
const REMOVE_POKE = 'REMOVE_POKE';

export const createPokemon = pokemon => ({
    type: CREATE_POKE,
    pokemon,
});
  
export const removePokemon = pokemon => ({
    type: REMOVE_POKE,
    pokemon,
});

export const pokemonsReducer = (state = [], action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case CREATE_POKE:
            return [...state, action.pokemon].sort((a, b) => a.number - b.number);
        case REMOVE_POKE:
            return state.filter(pokemon => pokemon.name !== action.pokemon.name);
        default:
            return state;               
    }
};