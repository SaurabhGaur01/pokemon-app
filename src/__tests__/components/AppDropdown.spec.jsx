import React from 'react';
import { shallow } from 'enzyme';
import AppDropdown from '../../components/shared/AppDropdown';

let mockProps;

describe('AppDropdown', () => {
    beforeEach(() => {
        mockProps = {
            label: 'mockLabel',
            options: [{ value: 'mockValue', text: 'mockText' }],
            onSelection: jest.fn(),
        }
    })
    it('should render component correctly', () => {
        const renderedModule = shallow(<AppDropdown {...mockProps} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call onSelection when any dropdown value changed', () => {
        const renderedModule = shallow(<AppDropdown {...mockProps} />);
        renderedModule.find('#form-select').at(0).simulate('change', {target: { value: 'mockValue'}});
        expect(mockProps.onSelection).toHaveBeenCalledTimes(1);
    });
})