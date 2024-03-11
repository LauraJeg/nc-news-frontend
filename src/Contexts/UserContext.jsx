import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const {userID, setUserID}= userState(1);

    return (
            <UserContext.Provider value = {{userID, setUserID}}>
                {children}
            </UserContext.Provider>
            );
    };