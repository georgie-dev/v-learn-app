import React, { useContext, createContext, useState } from "react";
import db from "../modules/auth/database";

const StateContext = createContext();

const initialState = {
    chat: false,
    notification: false,
    userProfile: false,
};

export const ContextProvider = ({ children }) => {
    const [activeMenu, setactiveMenu] = useState(true);

    const [isClicked, setisClicked] = useState(initialState);

    const handleClick = (clicked) => {
        setisClicked({
            ...initialState,
            [clicked]: true,
        });
    };
    const handleClose = (clicked) => {
        setisClicked({
            ...initialState,
            [clicked]: false,
        });
    };

    const [screenSize, setscreenSize] = useState(undefined);

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setactiveMenu,
                isClicked,
                setisClicked,
                handleClick,
                screenSize,
                setscreenSize,
                handleClose,
                db,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
