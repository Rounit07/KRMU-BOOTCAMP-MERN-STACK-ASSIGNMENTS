// import { Children } from "react";
import { useState } from "react";
import { createContext,useContext } from "react";


export const AppContext = createContext();

export const AppProvider = ({children})=>{
    const [light,setLight]=useState(true);

    const value= {light,setLight};
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const appContext=()=>useContext(AppContext);