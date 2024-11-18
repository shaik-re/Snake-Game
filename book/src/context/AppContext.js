import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext(); // Correctly exporting context

const AppContextProvider = ({ children }) => {
    const value = {
        doctors,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider; // Correctly exporting provider
