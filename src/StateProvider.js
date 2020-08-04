//setup data layer
import React,{ createContext,useContext,useReducer }  from "react";

//This is data layer
export const StateContext= createContext();

//Build a provider
export const StateProvider=({ reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//this is how we use inside component
export const useStateValue=() => useContext(StateContext);


