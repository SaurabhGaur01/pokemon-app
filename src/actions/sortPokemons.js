import { 
    POKEMONS_SORT, NAME_ASC_ORDER, NAME_DSC_ORDER, HEIGHT_ASC_ORDER, HEIGHT_DSC_ORDER, WEIGHT_ASC_ORDER,
    WEIGHT_DSC_ORDER, NONE, 
} from '../constants/appConstants';

const sortPokemons = value => (dispatch, getState) => {
    const { pokemonList, viewList } = getState().pokemons;
    if(value === NONE) {
        dispatch({
            type: POKEMONS_SORT,
            viewList: pokemonList,
        });
        return;
    }

    const sortedData = [...viewList].sort((a, b) => {
        switch(value) {
            case NAME_ASC_ORDER: 
                return a.name.localeCompare(b.name);
            case NAME_DSC_ORDER: 
                return b.name.localeCompare(a.name);
            case HEIGHT_ASC_ORDER: 
                return a.height - b.height;
            case HEIGHT_DSC_ORDER: 
                return b.height - a.height;
            case WEIGHT_ASC_ORDER: 
                return a.weight - b.weight;
            case WEIGHT_DSC_ORDER: 
                return b.weight - a.weight;          
            default:
                return [];
        }
    });

    dispatch({
        type: POKEMONS_SORT,
        viewList: sortedData,
    });  
}

export default sortPokemons;