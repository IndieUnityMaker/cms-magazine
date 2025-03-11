import { useState, useMemo } from "react";

export default function useTableSort<T>(data: T[]) {
    const [sortedType, setSortedType] = useState<keyof T | null>(null);
    const [sortDirection, setSortDirection] = useState<boolean>(true);

    const sortedData = useMemo(() => {
        const sorted = [...data];
        if (sortedType === null) return data;

        if (sortedType) {
            sorted.sort((a, b) => {
                const aValue = a[sortedType];
                const bValue = b[sortedType];

                if (typeof aValue === "string" && typeof bValue === "string") {
                    return sortDirection ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
                }

                if (typeof aValue === "number" && typeof bValue === "number") {
                    return sortDirection ? aValue - bValue : bValue - aValue;
                }
                return 0;
            });
        }
        return sorted;
    }, [data, sortedType, sortDirection]);

    const toggleSortDirection = () => {
        setSortDirection((prevDirection) => !prevDirection);
    };

    return { sortedData, sortedType, setSortedType, toggleSortDirection };
}