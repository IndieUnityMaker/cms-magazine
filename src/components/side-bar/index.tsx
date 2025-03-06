import { Link } from "react-router-dom";
import { useTheme } from "../../providers/theme-provider/theme-context";
import styles from "./index.module.css";
import { Paths } from "../../paths";

export const SideBar = () => {
    const { isDark } = useTheme();

    return (
        <aside
            className={`${styles.sidebar} ${
                isDark ? styles.dark : styles.light
            }`}
        >
            <Link className={styles.sidebarButton} to={Paths.home}>
                Главная
            </Link>
            <Link className={styles.sidebarButton} to={Paths.clients}>
                Клиенты
            </Link>
            <Link className={styles.sidebarButton} to={Paths.orders}>
                Заказы
            </Link>
            <Link className={styles.sidebarButton} to={Paths.products}>
                Товары
            </Link>
        </aside>
    );
};
