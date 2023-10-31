"use client";

// import { ThemeContext } from "@/context/ThemeContext";
// import { useContext } from "react";
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }) => {
    // const { theme } = useContext(ThemeContext);

    return (
        <ThemeProvider>
            { children}
        </ThemeProvider>
    );
};