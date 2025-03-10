import { useEffect, useRef, useState } from "react";
import style from "./index.module.css";
import { useTheme } from "../../../providers/theme-provider/theme-context";

interface SelectElementProps {
    options: string[];
    mainOption: string;
    onChange: (selectedOption: string) => void;
}

export const SelectElement = ({
    onChange,
    options,
    mainOption,
}: SelectElementProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [placeholder, setPlaceholder] = useState(mainOption);
    const refContainer = useRef<HTMLDivElement | null>(null);

    const { isDark } = useTheme();

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const { target } = event;
            if (
                target instanceof Node &&
                !refContainer.current?.contains(target)
            ) {
                setIsOpen(false);
            }
        };

        window.addEventListener("click", handleClick);
    }, []);

    const handleSelectOption = (evt: React.MouseEvent<HTMLUListElement>) => {
        const target = evt.target as HTMLElement;

        if (target.tagName === "LI") {
            const textContent = target.textContent;
            setPlaceholder(textContent as string);
            onChange(textContent as string);
            setIsOpen(false);
        }
    };

    return (
        <div ref={refContainer} className={style.selectContainer}>
            <div
                onClick={() => setIsOpen((prev) => !prev)}
                className={`${style.selectButton} ${
                    isDark ? style.dark : style.light
                }`}
            >
                {placeholder}
            </div>
            {isOpen && (
                <ul
                    onClick={handleSelectOption}
                    className={`${style.optionList} ${
                        isDark ? style.dark : style.light
                    }`}
                >
                    <li
                        className={`${style.option} ${
                            isDark ? style.dark : style.light
                        }`}
                    >
                        {mainOption}
                    </li>
                    {options.map((item) => (
                        <li
                            key={item}
                            className={`${style.option} ${
                                isDark ? style.dark : style.light
                            }`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
