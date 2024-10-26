import * as Yup from "yup";

export const validationSchema = Yup.object({
    username: Yup.string()
        .min(3, "Username must be between 3-16 characters long")
        .max(16, "Username must be between 3-16 characters long")
        .required("Tên người dùng không được để trống!"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email không được để trống!"),
    password: Yup.string()
        .min(6, "Password must be at least 8 characters")
        .matches(/[0-9]/, "Mật khẩu phải chứa một con số!")
        .matches(/[a-z]/, "Mật khẩu phải chứa một chữ thường!")
        .matches(/[A-Z]/, "Mật khẩu phải chứa một chữ in hoa!")
        .matches(
            /[!@#$%^&*()]/,
            "Mật khẩu phải chứa một ký tự đặc biệt!" //\n! @ # $ % ^ & * ( )
        )
        .required("Mật khẩu không được để trống!"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Mật khẩu không khớp!")
        .required("Xin hãy điền lại mật khẩu!"),
});
