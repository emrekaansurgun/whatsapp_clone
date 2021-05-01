export const initialState = {
    // Comment null to avoid logging into the app every time but don't send a message
    user:null,
};

export const actionTypes = {
    SET_USER : "SET_USER",
};

const reducer = (state, action) => {
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
};

export default reducer;