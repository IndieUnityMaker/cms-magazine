import { useTheme } from "../../providers/theme-provider/theme-context";
import { Header } from "../header";
import { SideBar } from "../side-bar";

import styles from "./index.module.css";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    const { isDark } = useTheme();

    console.log(".mainContainer", isDark);

    return (
        <>
            <Header />
            <div className={styles.mainContainer}>
                <SideBar />
                <div
                    className={`${styles.mainContent} ${
                        isDark ? styles.dark : styles.light
                    }`}
                >
                    <div
                        className={`${styles.content} ${
                            isDark ? styles.dark : styles.light
                        }`}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};
