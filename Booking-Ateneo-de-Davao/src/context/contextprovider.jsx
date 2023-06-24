import {createContext, useContext, useState } from "react";

const stateContext = createContext({
    currentUser: null,
    token: null
})

export const ContextProvider = ({children}) => {
    const [currnetUser,setCurrentUser] = useState({});
    const [userToken, setUserToken] = useState(null);

    // const setToken = (token) => {
    //     _setToken(token)
    //     if(token){
    //         localStorage.setItem('ACCESS_TOKEN', token);
    //     }else{
    //         localStorage.removeItem('ACCESS_TOKEN')
    //     }
    // }



    return (
        <stateContext.Provider value={{
            user: null,
            token: null,
            setUser: () => {},
            setToken: () => {},

        }}>
            {children}

        </stateContext.Provider>
    )
}

export const useStateContext = () => useContext(stateContext)