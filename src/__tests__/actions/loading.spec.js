import {
    changeLoading,
    loadingReducer,
} from '../../actions/loading';

describe('loading Tests', () => {
    describe('Action Generator', () => {
        it('setDrawerClosed should match the snapshot' , () => {
            expect(changeLoading(true)).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(loadingReducer()).toEqual(true);
        });
        it('should return the value to true when true flag is passed' , () => {
            expect(loadingReducer('', changeLoading(true))).toEqual(true);
        });
        it('should return the value to false when false flag is passed' , () => {
            expect(loadingReducer('', changeLoading(false))).toEqual(false);
        });
    });
});