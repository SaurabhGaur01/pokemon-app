import React from 'react';
import { shallow } from 'enzyme';
import { TestablePokemonsDetails as PokemonsDetails } from '../../components/Pokemon/PokemonsDetails';

let mockProps;

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
      number: 12,
    }),
  }));

describe('PokemonsDetails', () => {
    beforeEach(() => {
        mockProps = {
            loading: false,
            handleRetrievePokemonDetails: jest.fn(),
            pokemonDetails: {
                number: 1,
                namePkm: 'mockValue',
                image: 'mockImage',
                name: 'mockName',
                sprites: 'mockSprites',
                height: 10,
                weight: 20,
                captureRate: 'mockValue',
                growthRate: 'mockValue',
                baseExperience: 'mockExperience',
                types: ['mockValue', 'mockValueTwo'],
            },
        }
    })
    it('should render component correctly', () => {
        const renderedModule = shallow(<PokemonsDetails {...mockProps} />);
        expect(renderedModule).toMatchSnapshot();
    });
    it('should render component correctly when loading is true', () => {
        mockProps.loading = true;
        const renderedModule = shallow(<PokemonsDetails {...mockProps} />);
        expect(renderedModule).toMatchSnapshot();
    });
})