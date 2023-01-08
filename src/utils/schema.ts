import * as yup from "yup";
import { emailRegex, passwordRegex, _passwordRegex } from "./commonHelpers";
export const formSchema = yup.object().shape({
  password: yup
    .string()
    .matches(_passwordRegex, "format invalid")
    .required("Password is mandatory")
    .min(7, "Password must be at 7 char long"),
  confirmPassword: yup
    .string()
    .required("Password is mandatory")
    .oneOf([yup.ref("password")], "Passwords does not match"),
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().matches(emailRegex, "Invalid email"),
});

export const signinSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is mandatory")
    .min(8, "Incorrect password"),

  email: yup.string().matches(emailRegex, "Invalid email"),
});
