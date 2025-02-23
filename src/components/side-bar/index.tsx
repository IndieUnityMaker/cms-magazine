import { useTheme } from "../../providers/theme-provider/theme-context";
import styles from "./index.module.css";

export const SideBar = () => {
    const { isDark } = useTheme();

    return (
        <aside
            className={`${styles.sidebar} ${
                isDark ? styles.dark : styles.light
            }`}
        >
            <button className={styles.sidebarButton}>Кнопка 1</button>
            <button className={styles.sidebarButton}>Кнопка 2</button>
            <button className={styles.sidebarButton}>Кнопка 3</button>
            <button className={styles.sidebarButton}>Кнопка 4</button>
        </aside>
    );
};
