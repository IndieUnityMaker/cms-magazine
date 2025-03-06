import { JSX } from "react";
import style from "./index.module.css";
import { useTheme } from "../../providers/theme-provider/theme-context";

interface TableProps<T> {
    columns: Array<{ title: string; key: keyof T }>;
    data: T[];
    actions?: (item: T) => JSX.Element;
}

export const Table = <T,>({ columns, data, actions }: TableProps<T>) => {
    const { isDark } = useTheme();

    return (
        <div
            className={`${style.tableContainer} ${
                isDark ? style.dark : style.light
            }`}
        >
            <table className={style.tableMain}>
                <thead
                    className={`${style.tableHead} ${
                        isDark ? style.dark : style.light
                    }`}
                >
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column.title}</th>
                        ))}
                        {actions && <th>Действия</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {columns.map((column) => (
                                <td key={String(column.key)}>
                                    {String(item[column.key])}
                                </td>
                            ))}
                            {actions && <td>{actions(item)}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
