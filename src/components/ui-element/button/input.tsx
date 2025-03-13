import styles from "./index.module.css";

interface ButtonElementProps {
    text: string;
    style?: React.CSSProperties;
    action: (event: React.MouseEvent<HTMLButtonElement>) => void;
    preventDefault?: boolean;
    disabled?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    isDark: boolean;
}

export const ButtonElement: React.FC<ButtonElementProps> = ({
    text,
    action,
    style,
    preventDefault = false,
    disabled = false,
    onMouseEnter,
    onMouseLeave,
    isDark,
}) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (preventDefault) {
            event.preventDefault();
        }
        action(event);
    };

    return (
        <button
            className={`${styles.defaultButton} ${
                isDark ? styles.dark : styles.light
            }`}
            style={style}
            onClick={handleClick}
            disabled={disabled}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {text}
        </button>
    );
};
