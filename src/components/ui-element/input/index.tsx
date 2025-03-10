import React from "react";

interface InputElementProps {
    type: React.HTMLInputTypeAttribute;
    placeholder?: string;
    style?: React.CSSProperties;
    change?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    action?: () => void;
    required?: boolean;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    value?: string;
}

export const InputElement: React.FC<InputElementProps> = ({
    type,
    placeholder,
    style,
    change,
    action,
    required = false,
    onBlur,
    value,
}) => {
    return (
        <input
            onChange={change}
            onClick={action}
            onBlur={onBlur}
            type={type}
            placeholder={placeholder}
            style={style}
            required={required}
            value={value}
            aria-required={required}
        />
    );
};
