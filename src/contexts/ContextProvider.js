import React, { useContext, createContext, useState } from "react";
import db from "../modules/auth/database";
import Swal from "sweetalert2";

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

    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

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
                Toast,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
