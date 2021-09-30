const CHANGE_LOAD = 'CHANGE_LOAD';

export const changeLoading = isLoading => ({
    type: CHANGE_LOAD,
    isLoading,
});

export const loadingReducer = (state = true, action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case CHANGE_LOAD:
            return action.isLoading;
        default:
            return state;               
    }
};