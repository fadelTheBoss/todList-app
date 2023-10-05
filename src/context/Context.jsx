import { createContext, useContext, useReducer, useState } from "react";
import { taskReducer } from "./reducer";
const taskContext = createContext();

export const ContextProvider=({children})=>{
    const [state, dispatch]=useReducer(taskReducer, {
        items: [], 
        iseadOnly: true,
        taskStatus: []
    })
    
    return <taskContext.Provider value={{state, dispatch}} >
        {children}
    </taskContext.Provider>
}



export const useTaskContext=()=>{
    return useContext(taskContext)
}
export default taskContext 