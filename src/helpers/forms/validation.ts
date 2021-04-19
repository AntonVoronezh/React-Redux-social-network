// @ts-ignore
import is from "is_js";

export const validationForm = (username: string, password: string): boolean => {
  const isValidUsername = is.email(username);
  const isValidPassword = is.alphaNumeric(password);

  return isValidUsername && isValidPassword;
};
