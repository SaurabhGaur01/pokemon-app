const CHANGE_MESS = 'CHANGE_MESS';

export const changeMessage = message => ({
    type: CHANGE_MESS,
    message,
});
  
export const messageReducer = (state = '', action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case CHANGE_MESS:
            return action.message;
        default:
            return state;               
    }
};