"use client";

import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const values = {
        showMenu,
        toggleMenu
    }
    return (
        <MenuContext.Provider value={values}>
            {children}
        </MenuContext.Provider>
    );
};

export { MenuContext, MenuContextProvider }