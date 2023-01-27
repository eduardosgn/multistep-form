const infoReducer = (state, action) => {
    switch(action.type) {
        case 'GET_INFO_STEP_1':
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
        case 'ARCADE_MONTH':
            return {
                ...state,
                monthly: {
                    arc: true,
                    adv: false,
                    pro: false
                },
                yearly: {
                    arc: false,
                    adv: false,
                    pro: false
                }
            }
        case 'ADVANCED_MONTH':
            return {
                ...state,
                monthly: {
                    arc: false,
                    adv: true,
                    pro: false
                },
                yearly: {
                    arc: false,
                    adv: false,
                    pro: false
                }
            }
        case 'PRO_MONTH':
            return {
                ...state,
                monthly: {
                    arc: false,
                    adv: false,
                    pro: true
                },
                yearly: {
                    arc: false,
                    adv: false,
                    pro: false
                }
            }
        case 'ARCADE_YEAR':
            return {
                ...state,
                yearly: {
                    arc: true,
                    adv: false,
                    pro: false
                },
                monthly: {
                    arc: false,
                    adv: false,
                    pro: false
                }
            }
        case 'ADVANCED_YEAR':
            return {
                ...state,
                yearly: {
                    arc: false,
                    adv: true,
                    pro: false
                },
                monthly: {
                    arc: false,
                    adv: false,
                    pro: false
                }
            }
        case 'PRO_YEAR':
            return {
                ...state,
                yearly: {
                    arc: false,
                    adv: false,
                    pro: true
                },
                monthly: {
                    arc: false,
                    adv: false,
                    pro: false
                }
            }
        case 'RESET_PLAN_VALUES':
            return {
                ...state,
                monthly: {
                    arc: false,
                    adv: false,
                    pro: false
                },
                yearly: {
                    arc: false,
                    adv: false,
                    pro: false
                }
            }
        default: 
            return state;
    };
};

export default infoReducer;