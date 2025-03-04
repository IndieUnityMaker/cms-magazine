import { FormEvent, useState } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";
import { validateEmail, validatePassword } from "../../utils/validate";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Заполните поля ввода.");
            return;
        }
        if (!validateEmail(email)) {
            setError("Email введён не корректно.");
            return;
        }
        if (!validatePassword(password)) {
            setError("Пароль введён не корректно.");
            return;
        }
        //Логика отправки данных
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.formContainer}>
                <div className={styles.formContent}>
                    <h2>Войти в CMS</h2>
                    <hr className={styles.divider} />
                    {error ? <p className={styles.error}>{error}</p> : ""}
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Пароль:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Войти</button>
                        <div className={styles.noAcc}>
                            <p>Нет аккаунта?</p>{" "}
                            <Link to={Paths.register}>Зарегистрироваться.</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
