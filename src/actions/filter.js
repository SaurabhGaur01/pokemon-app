const CHANGE_FILTER = 'CHANGE_FILTER';

export const changeFilter = typePkm => ({
    type: CHANGE_FILTER,
    typePkm,
});

export const filterReducer = (state = 'All', action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case CHANGE_FILTER:
            return action.typePkm;
        default:
            return state;               
    }
};