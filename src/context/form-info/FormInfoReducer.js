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
                    setMonthly: true,
                    arcMon: true,
                    advMon: false,
                    proMon: false
                },
                yearly: {
                    setYearly: false,
                    arcYr: false,
                    advYr: false,
                    proYr: false
                }
            }
        case 'ADVANCED_MONTH':
            return {
                ...state,
                monthly: {
                    setMonthly: true,
                    arcMon: false,
                    advMon: true,
                    proMon: false
                },
                yearly: {
                    setYearly: false,
                    arcYr: false,
                    advYr: false,
                    proYr: false
                }
            }
        case 'PRO_MONTH':
            return {
                ...state,
                monthly: {
                    setMonthly: true,
                    arcMon: false,
                    advMon: false,
                    proMon: true
                },
                yearly: {
                    setYearly: false,
                    arcYr: false,
                    advYr: false,
                    proYr: false
                }
            }
        case 'ARCADE_YEAR':
            return {
                ...state,
                yearly: {
                    setYearly: true,
                    arcYr: true,
                    advYr: false,
                    proYr: false
                },
                monthly: {
                    setMonthly: false,
                    arcMon: false,
                    advMon: false,
                    proMon: false
                }
            }
        case 'ADVANCED_YEAR':
            return {
                ...state,
                yearly: {
                    setYearly: true,
                    arcYr: false,
                    advYr: true,
                    proYr: false
                },
                monthly: {
                    setMonthly: false,
                    arcMon: false,
                    advMon: false,
                    proMon: false
                }
            }
        case 'PRO_YEAR':
            return {
                ...state,
                yearly: {
                    setYearly: true,
                    arcYr: false,
                    advYr: false,
                    proYr: true
                },
                monthly: {
                    setMonthly: false,
                    arcMon: false,
                    advMon: false,
                    proMon: false
                }
            }
        default: 
            return state;
    };
};

export default infoReducer;