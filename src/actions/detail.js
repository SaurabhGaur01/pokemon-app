const CHANGE_DETAIL = 'CHANGE_DETAIL';

export const changeDetail = detail => ({
    type: CHANGE_DETAIL,
    detail,
});

export const detailReducer = (state = {}, action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case CHANGE_DETAIL:
            return action.detail;
        default:
            return state;               
    }
};