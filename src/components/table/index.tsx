import { JSX } from "react";
import style from "./index.module.css";
import { useTheme } from "../../providers/theme-provider/theme-context";
import useTableSort from "../../hooks/useTableSort";

interface TableProps<T> {
    columns: Array<{ title: string; key: keyof T }>;
    data: T[];
    actions?: (item: T) => JSX.Element;
}

export const Table = <T,>({ columns, data, actions }: TableProps<T>) => {
    const { isDark } = useTheme();
    const { setSortedType, sortedData, toggleSortDirection } =
        useTableSort(data);

    const handleSort = (key: keyof T) => {
        setSortedType(key);
        toggleSortDirection();
    };

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
                            <th
                                onClick={() => handleSort(column.key)}
                                key={index}
                            >
                                {column.title}
                            </th>
                        ))}
                        {actions && <th>Действия</th>}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item, index) => (
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
