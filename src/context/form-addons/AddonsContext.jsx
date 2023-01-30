import { createContext, useState } from "react";

export const AddonsContext = createContext();

export const AddonsProvider = ({ children }) => {
    const [addons, setAddons] = useState({
        onlineServiceMon: false,
        largerStorageMon: false,
        customProfileMon: false,
        onlineServiceYr: false,
        largerStorageYr: false,
        customProfileYr: false,
    });

    return (
        <AddonsContext.Provider value={[addons, setAddons]}>
            { children }
        </AddonsContext.Provider>
    );
};