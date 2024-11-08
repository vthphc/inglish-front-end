import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "../../utils/validationSchema";
import { signupApi } from "../../api/auth/signup";

export default function Signup() {
    const navigate = useNavigate();
    const inputRefs = {
        username: useRef(""),
        email: useRef(""),
        password: useRef(""),
        confirmPassword: useRef(""),
    };
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const inputs = [
        {
            id: 1,
            type: "text",
            name: "username",
            label: "Tên người dùng",
            inputRef: inputRefs.username,
            value: formData.username,
        },
        {
            id: 2,
            type: "email",
            name: "email",
            label: "Email",
            inputRef: inputRefs.email,
            value: formData.email,
        },
        {
            id: 3,
            type: "password",
            name: "password",
            label: "Mật khẩu",
            inputRef: inputRefs.password,
            value: formData.password,
        },
        {
            id: 4,
            type: "password",
            name: "confirmPassword",
            label: "Điền lại mật khẩu",
            inputRef: inputRefs.confirmPassword,
            value: formData.confirmPassword,
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate(formData, { abortEarly: false }); 
            // console.log("Form submitted", formData);
            const { username, email, password } = formData;
            const res = await signupApi(username, email, password);
            if (res) {
                alert("Đăng ký thành công");
                navigate("/signin");
            }
        } catch (error) {
            const newErrors = {};
            error.inner.forEach((err) => {
                newErrors[err.path] = err.message;
            });
            setErrors(newErrors);
            console.log(errors);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen ">
            <p className="flex flex-col">
                <span className="font-extrabold text-4xl">
                    Welcome to Inglish!
                </span>
                <span className="text-center mt-6 mb-12">
                    Hãy tạo một tài khoản để bắt đầu
                </span>
            </p>
            <form
                className="*:my-2 flex flex-col w-1/5"
                onSubmit={handleSubmit}
            >
                {inputs.map((input) => (
                    <>
                        <Input
                            key={input.id}
                            {...input}
                            onChange={handleChange}
                            className="p-2"
                        />
                        {errors[input.name] && (
                            <span className="text-red-500 text-sm">
                                {errors[input.name]}
                            </span>
                        )}
                    </>
                ))}
                <Button
                    type="submit"
                    className="py-4 rounded-2xl my-4 bg-purple-700 shadow-md shadow-gray-400 "
                >
                    Đăng ký
                </Button>
                <div className="flex">
                    <hr className="border-t-[1] grow m-auto border-gray-300"></hr>
                    <span className="mx-2 text-xl text-gray-500">HOẶC</span>
                    <hr className="border-t-[1] grow m-auto border-gray-300"></hr>
                </div>
                <Button
                    className="py-4 rounded-2xl my-4 bg-red-500"
                    onClick={() => alert("Đăng ký qua Google")}
                >
                    Đăng ký qua Google
                </Button>
                <Button
                    className="py-4 rounded-2xl my-4 bg-blue-500"
                    onClick={() => alert("Đăng ký qua Facebook")}
                >
                    Đăng ký qua Facebook
                </Button>
            </form>
        </div>
    );
}
