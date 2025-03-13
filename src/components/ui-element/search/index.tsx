import { ChangeEvent } from "react";
import style from "./index.module.css";

interface SearchElementProps {
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
    isDark: boolean;
    placeholder?: string;
}

export const SearchElement = ({
    onChange,
    isDark,
    placeholder = "Найти",
}: SearchElementProps) => {
    return (
        <input
            onChange={onChange}
            className={`${style.inputSearch} ${
                isDark ? style.dark : style.light
            }`}
            type="text"
            placeholder={placeholder}
        />
    );
};
