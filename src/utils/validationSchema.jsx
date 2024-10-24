import * as Yup from "yup";

export const validationSchema = Yup.object({
    username: Yup.string().required().min(3).max(16),
    email: Yup.string()
        .required("Email is Required")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Missing password!")
        .min(6, "Password must be at least 8 characters")
        .matches(/[0-9]/, "Password must contain a number")
        .matches(/[a-z]/, "Password must contain a lowercase letter")
        .matches(/[A-Z]/, "Password must contain an uppercase letter")
        .matches(/[!@#$%^&*()]/, "Password must contain a special character"),
    confrimPasword: Yup.string()
        .oneOf([Yup.ref("password")], "Password must match")
        .required("Please re-enter your password"),
});
