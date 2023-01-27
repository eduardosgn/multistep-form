import { createContext, useReducer } from "react";
import FormInfoReducer from './FormInfoReducer';

const FormInfoContext = createContext();

export const FormInfoProvider = ({ children }) => {
    const initialState = {
        name: '',
        email: '',
        phoneNumber: '',
        monthly: {
            setMonthly: false,
            arc: false,
            adv: false,
            pro: false,
        },
        yearly: {
            setYearly: false,
            arc: false,
            adv: false,
            pro: false
        },
        addOnsMonthly: {
            onlineService: false,
            largerStorage: false,
            customizableProfile: false
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