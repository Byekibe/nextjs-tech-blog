"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useTheme } from 'next-themes'

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    // const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    // function getFromLocalStorage() {
    //     if (typeof window !== 'undefined') {   
    //         useEffect(() => {
    //             const theme = localStorage.getItem("theme");
    //         }, [])
    
    //         return "dark" || theme;
    //     }
    // }

    // const toggleTheme = () => {
    //     setTheme("dark");
    // }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    // useEffect(() => {
    //     setMounted(true);
    // }, [])


    const values = {
        theme,
        // toggleTheme,
    }
    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider}
