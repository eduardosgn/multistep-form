import { createContext, useReducer } from "react";
import FormInfoReducer from './FormInfoReducer';

const FormInfoContext = createContext();

export const FormInfoProvider = ({ children }) => {
    const initialState = {
        name: '',
        email: '',
        phoneNumber: '',
        monthly: {
            setMonthly: true,
            arcMon: false,
            advMon: false,
            proMon: false,
        },
        yearly: {
            setYearly: false,
            arcYr: false,
            advYr: false,
            proYr: false
        }
    };

    const [state, dispatch] = useReducer(FormInfoReducer, initialState);

    return (
        <FormInfoContext.Provider
            value={{
                ...state,
                dispatch
            }}
        >
            { children }
        </FormInfoContext.Provider>
    );
};

export default FormInfoContext;