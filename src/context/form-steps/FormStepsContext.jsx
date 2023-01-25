import { createContext, useReducer } from "react";
import formStepsReducer from './formStepsReducer';

const FormStepsContext = createContext();

export const FormStepsProvider = ({ children }) => {
    const initialState = {
        step: 1
    };

    const [state, dispatch] = useReducer(formStepsReducer, initialState);

    return (
        <FormStepsContext.Provider
            value={{
                ...state,
                dispatch
            }}
        >
            { children }
        </FormStepsContext.Provider>
    );
};

export default FormStepsContext;