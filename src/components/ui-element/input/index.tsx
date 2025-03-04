import React from "react";

interface InputElementProps {
    type: React.HTMLInputTypeAttribute;
    placeholder?: string;
    style?: React.CSSProperties;
    change?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    action?: () => void;
    required?: boolean; // Опциональное свойство для обязательного ввода
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void; // Опциональная обработка события blur
    value?: string; // Для управления значением компонента
}

export const InputElement: React.FC<InputElementProps> = ({
    type,
    placeholder,
    style,
    change,
    action,
    required = false, // Значение по умолчанию для required
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
            required={required} // Используем опциональное свойство
            value={value} // Устанавливаем значение поля ввода
            aria-required={required} // Для улучшения доступности
        />
    );
};
