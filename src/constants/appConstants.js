export const POKEMON_LIST = 'POKEMON_LIST';
export const POKEMON_DETAILS = 'POKEMON_DETAILS';
export const POKEMONS_SORT = 'POKEMONS_SORT';
export const POKEMONS_FILTER = 'POKEMONS_FILTER';
export const SET_POKEMONS_FILTER = 'SET_POKEMONS_FILTER';
export const NAME_ASC_ORDER = 'NAME_ASC_ORDER';
export const NAME_DSC_ORDER = 'NAME_DSC_ORDER';
export const WEIGHT_ASC_ORDER = 'WEIGHT_ASC_ORDER';
export const WEIGHT_DSC_ORDER = 'WEIGHT_DSC_ORDER';
export const HEIGHT_ASC_ORDER = 'HEIGHT_ASC_ORDER';
export const HEIGHT_DSC_ORDER = 'HEIGHT_DSC_ORDER';
export const NONE = 'NONE';

export const PAGE_OPTIONS = [
    { value: 10, text: '10' },
    { value: 20, text: '20' },
    { value: 50, text: '50' },
];

export const SORT_TYPES = [
    { value: NONE, text: 'Please Select' },
    { value: NAME_ASC_ORDER, text: 'Name ASC' },
    { value: NAME_DSC_ORDER, text: 'Name DSC' },
    { value: HEIGHT_ASC_ORDER, text: 'Height ASC' },
    { value: HEIGHT_DSC_ORDER, text: 'Height DSC' },
    { value: WEIGHT_ASC_ORDER, text: 'Width ASC' },
    { value: WEIGHT_DSC_ORDER, text: 'Width DSC' },
];

export const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=500';
export const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/';
export const POKEMON_SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species/';
export const UNKNOWN = 'unknown';