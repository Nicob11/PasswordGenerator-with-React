import React,{ createContext, useContext} from "react";

const AppContext = createContext();

export const appProvider = ({children}) => {
    return(
        <>
            <AppContext.Provider>
             {children}
            </AppContext.Provider>
        </> 
    )
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;
