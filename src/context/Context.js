import {createContext, useReducer} from "react"

export const Cartcontext = createContext();

export const Context = (props) => {
    // const state = "Hello state"
    const reducer = (state, action) => {
         switch(action.type){
             case "ADD":
                 return [...state, action.payload]
             default: return state;
         }
    }
    const[state, dispatch] = useReducer(reducer, [])
    const info = {state, dispatch}
     return<Cartcontext.Provider value={info}>
            {props.children}
     </Cartcontext.Provider>
}