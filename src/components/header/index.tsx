import { useTheme } from "../../providers/theme-provider/theme-context";
import styles from "./index.module.css";

export const Header = () => {
    const { isDark } = useTheme();
    console.log(isDark);

    return (
        <header
            className={`${styles.header} ${
                isDark ? styles.dark : styles.light
            }`}
        >
            <h1>CMS Magazine</h1>
            <button className={styles.profileButton}>Профиль</button>
        </header>
    );
};
