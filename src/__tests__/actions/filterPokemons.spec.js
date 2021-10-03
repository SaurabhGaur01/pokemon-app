import filterPokemons from '../../actions/filterPokemons';

const mockState = () => ({
    pokemons: {
        pokemonList: [
            { name: 'mockName', abilities: ['mockAbilityOne', 'mockAbilityTwo']},
            { name: 'mockNameTwo', abilities: ['mockAbilityThree', 'mockAbilityFour']},
        ]
    },
});

describe('The filterPokemons', () => {
    let dispatch;
    beforeEach(() => {
        dispatch = jest.fn(x => x);
    });

    it('should set filtered cars which matches with the store', () => {
        filterPokemons('mockName') (dispatch, mockState);
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, { type: 'POKEMONS_FILTER', viewList: [
            { name: 'mockName', abilities: ['mockAbilityOne', 'mockAbilityTwo']},
            { name: 'mockNameTwo', abilities: ['mockAbilityThree', 'mockAbilityFour']},
        ] });
    });
});   