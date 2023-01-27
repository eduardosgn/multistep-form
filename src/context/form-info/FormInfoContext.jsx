import { createContext, useReducer } from "react";
import FormInfoReducer from './FormInfoReducer';

const FormInfoContext = createContext();

export const FormInfoProvider = ({ children }) => {
    const initialState = {
        name: '',
        email: '',
        phoneNumber: '',
        monthly: {
            arc: false,
            adv: false,
            pro: false,
        },
        yearly: {
            arc: false,
            adv: false,
            pro: false
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