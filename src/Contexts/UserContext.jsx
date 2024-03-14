import React from 'react'
import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({username: 'grumpy19'});

    return (
            <UserContext.Provider value = {{currentUser, setCurrentUser}}>
                {children}
            </UserContext.Provider>
            );
    };