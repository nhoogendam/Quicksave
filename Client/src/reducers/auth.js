
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
const authReducer = (state = { authData : null }, action) => {
    switch(action.type) {
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return { ...state, authData: action?.data };
        case 'LOGOUT':
            localStorage.clear();
            break;
        default:
            console.log("Default");
            return state;
    }
};

export default authReducer;