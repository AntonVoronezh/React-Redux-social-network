import is from 'is_js'

export const validationForm = (username, password) => {
    const isValidUsername = is.email(username)
    const isValidPassword = is.alphaNumeric(password);

    return isValidUsername && isValidPassword;
}