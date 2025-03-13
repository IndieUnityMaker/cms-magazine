import { useTheme } from "../../providers/theme-provider/theme-context";
import { ThemeButton } from "../ui-element/themeButton";
import styles from "./index.module.css";

export const Header = () => {
    const { isDark } = useTheme();

    return (
        <header
            className={`${styles.header} ${
                isDark ? styles.dark : styles.light
            }`}
        >
            <h1>CMS Magazine</h1>

            <div className={styles.headerRight}>
                <ThemeButton />
                <button className={styles.profileButton}>Профиль</button>
            </div>
        </header>
    );
};
