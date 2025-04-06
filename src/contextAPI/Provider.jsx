import { createContext, useState } from "react";

const Data = createContext();

const DataProvider = ({ children }) => {
    const [user, setUser] = useState({name: "Lakshay"});
    const updateUser = (newUser) => {
        return setUser({name: newUser});
    }
    return (
        <Data.Provider value={{user, updateUser}}>
            {children}
        </Data.Provider>
    )
}

export {Data, DataProvider}