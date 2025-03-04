interface ButtonElementProps {
    text: string;
    style?: React.CSSProperties;
    action: (event: React.MouseEvent<HTMLButtonElement>) => void;
    preventDefault?: boolean;
    disabled?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export const ButtonElement: React.FC<ButtonElementProps> = ({
    text,
    action,
    style,
    preventDefault = false,
    disabled = false,
    onMouseEnter,
    onMouseLeave,
}) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (preventDefault) {
            event.preventDefault();
        }
        action(event);
    };

    return (
        <button
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
