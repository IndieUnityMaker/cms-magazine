import { FormEvent, useState } from "react";
import styles from "./index.module.css";
import { validateEmail, validatePassword } from "../../utils/validate";
import { Paths } from "../../paths";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        if (!email || !password || !firstName || !lastName) {
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
                    <h2>Зарегистрироваться в CMS</h2>
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
                            <label htmlFor="firstName">Имя</label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="lastName">Фамилия</label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
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
                            <p>Уже зарегистрированы?</p>{" "}
                            <Link to={Paths.login}>Войти в аккаунт.</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
