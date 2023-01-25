import { createContext, useContext, useReducer, useState } from "react";
import FormInfoReducer from './FormInfoReducer';

const FormInfoContext = createContext();

export const FormInfoProvider = ({ children }) => {
    const initialState = {
        name: '',
        email: '',
        phoneNumber: ''
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