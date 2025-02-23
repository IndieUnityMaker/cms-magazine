import { createContext, useContext } from "react";

interface IThemeContext {
    isDark: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("Theme context error!");
    }

    return context;
};