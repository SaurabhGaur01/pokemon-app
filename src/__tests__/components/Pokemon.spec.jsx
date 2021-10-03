import React from 'react';
import { shallow } from 'enzyme';
import Pokemon from '../../components/Pokemon/Pokemon';

let mockProps;

describe('Pokemon', () => {
    beforeEach(() => {
        mockProps = {
            pokemon: {
                id: 1,
                name: 'mockName',
                sprites: 'mockSprites',
                height: 10,
                weight: 20,
                abilities: ['mockvalue', 'mockValue2'],
            }
        }
    })
    it('should render component correctly', () => {
        const renderedModule = shallow(<Pokemon {...mockProps} />);
        expect(renderedModule).toMatchSnapshot();
    });
})