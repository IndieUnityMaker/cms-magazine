import { useTheme } from "../../../providers/theme-provider/theme-context";
import dark from "/theme-icons/dark.png";
import light from "/theme-icons/light.png";

export const ThemeButton = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <img
            src={isDark ? light : dark}
            alt="theme button"
            onClick={toggleTheme}
            width={30}
        />
    );
};
