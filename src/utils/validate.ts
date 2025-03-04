function validateEmail(email: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password: string) {
    const re = /^(?!.*\s).{3,}$/;
    return re.test(password);
}

export {
    validateEmail,
    validatePassword
}