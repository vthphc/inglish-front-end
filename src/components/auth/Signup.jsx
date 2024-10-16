import React from "react";
import { useRef } from "react";
import { Button, Input } from "@material-tailwind/react";

export default function Signup() {
    const inputRefs = {
        username: useRef(""),
        email: useRef(""),
        password: useRef(""),
        confirmPassword: useRef(""),
    };
    const inputs = [
        {
            id: 1,
            type: "text",
            label: "Tên người dùng",
            inputRef: inputRefs.username,
        },
        {
            id: 2,
            type: "email",
            label: "Email",
            inputRef: inputRefs.email,
        },
        {
            id: 3,
            type: "password",
            label: "Mật khẩu",
            inputRef: inputRefs.password,
        },
        {
            id: 4,
            type: "password",
            label: "Điền lại mật khẩu",
            inputRef: inputRefs.confirmPassword,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRefs.username.current.value);
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
            <form className="*:my-2 flex flex-col" onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <Input
                        key={input.id}
                        {...input}
                        className="bg-gray-200 focus:bg-white"
                    />
                ))}
                <Button type="submit" className="my-4 bg-purple-700">
                    Đăng ký
                </Button>
                <div className="flex">
                    <hr className="border-t-[1] grow m-auto border-gray-300"></hr>
                    <span className="mx-2 text-xl text-gray-500">HOẶC</span>
                    <hr className="border-t-[1] grow m-auto border-gray-300"></hr>
                </div>
                <Button
                    className="my-4 bg-red-500"
                    onClick={() => alert("Đăng ký qua Google")}
                >
                    Đăng ký qua Google
                </Button>
                <Button
                    className="my-4 bg-blue-500"
                    onClick={() => alert("Đăng ký qua Facebook")}
                >
                    Đăng ký qua Facebook
                </Button>
            </form>
        </div>
    );
}
