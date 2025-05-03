import * as Yup from 'yup'

export const username = Yup.string().min(3, "Too Short!").required("Required");
export const email = Yup.string().email("Invalid email").required("Required");
export const password = Yup.string().min(6, "Too Short!").required("Required");

export const RegisterSchema = Yup.object().shape({
    username,
    email,
    password,
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
});

export const LoginSchema = Yup.object().shape({
    username,
    password
});