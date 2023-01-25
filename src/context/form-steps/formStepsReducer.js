const stepsReducer = (state, action) => {
    switch(action.type) {
        case 'STEP_1':
            return {
                ...state,
                step: 1
            }
        case 'STEP_2':
            return {
                ...state,
                step: 2
            }
        case 'STEP_3': 
            return {
                ...state,
                step: 3
            }
        case 'STEP_4':
            return {
                ...state,
                step: 4
            }
        default: 
            return state
    };
};

export default stepsReducer;