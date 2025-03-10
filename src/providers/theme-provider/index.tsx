import { useState } from "react";
import { ThemeContext } from "./theme-context";

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
