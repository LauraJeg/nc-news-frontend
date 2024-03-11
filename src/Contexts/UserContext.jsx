import React from 'react'
import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({username: 'Mashca'});
    console.log(currentUser)

    return (
            <UserContext.Provider value = {{currentUser, setCurrentUser}}>
                {children}
            </UserContext.Provider>
            );
    };