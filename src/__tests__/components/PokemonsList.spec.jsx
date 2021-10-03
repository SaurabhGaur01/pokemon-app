import React from 'react';
import { shallow } from 'enzyme';
import { TestablePokemonsList as PokemonsList } from '../../components/Pokemon/PokemonsList';

let mockProps;

describe('PokemonsList', () => {
    beforeEach(() => {
        mockProps = {
            loading: false,
            pokemons: {
                viewList: [{
                    id: 1,
                    name: 'mockName',
                    sprites: 'mockSprites',
                    height: 10,
                    weight: 20,
                    abilities: ['mockvalue', 'mockValue2'],
                }]
            },
        }
    })
    it('should render component correctly', () => {
        const renderedModule = shallow(<PokemonsList {...mockProps} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should render component correctly when loading is true', () => {
        mockProps.loading = true;
        const renderedModule = shallow(<PokemonsList {...mockProps} />);
        expect(renderedModule).toMatchSnapshot();
    });
})