const infoReducer = (state, action) => {
    switch(action.type) {
        case 'GET_INFO':
            return {
                ...state,
                name: action.payload,
                email: action.payload,
                phoneNumber: action.payload
            }
        case 'NAME_INPUT':
            return {
                ...state,
                name: action.payload
            }
        case 'EMAIL_INPUT':
            return {
                ...state,
                email: action.payload
            }
        case 'PHONE_INPUT':
            return{
                ...state,
                phoneNumber: action.payload
            }
        default: 
            return state
    };
};

export default infoReducer;