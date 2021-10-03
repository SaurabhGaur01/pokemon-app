import React from 'react';
import { shallow } from 'enzyme';
import { TestableFilterBar as FilterBar } from '../../components/Pokemon/FilterBar';

let mockProps;

describe('FilterBar', () => {
    beforeEach(() => {
        mockProps = {
            filterPokemons: jest.fn(),
            sortPokemons: jest.fn(),
        }
    })
    it('should render component correctly', () => {
        const renderedModule = shallow(<FilterBar {...mockProps} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call filterPokemons name or abilities is searched', () => {
        const renderedModule = shallow(<FilterBar {...mockProps} />);
        renderedModule.find('#name-input').at(0).simulate('change', {target: { value: 'mockValue'}});
        expect(mockProps.filterPokemons).toHaveBeenCalledTimes(1);
    });
})