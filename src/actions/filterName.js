const CHANGE_FILTER_NAME = 'CHANGE_FILTER_NAME';

export const changeFilterName = namePkm => ({
    type: CHANGE_FILTER_NAME,
    namePkm,
});

export const filterNameReducer = (state = '', action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case CHANGE_FILTER_NAME:
            return action.namePkm;
        default:
            return state;               
    }
};