import React from 'react'
import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const {userID, setUserID}= useState(1);

    return (
            <UserContext.Provider value = {{userID, setUserID}}>
                {children}
            </UserContext.Provider>
            );
    };