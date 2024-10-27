import React from "react";
import { useRef, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { signinApi } from "../../api/auth/signin";

export default function Signin() {
    const inputRefs = {
        username: useRef(""),
        email: useRef(""),
        password: useRef(""),
    };
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const inputs = [
        {
            id: 1,
            type: "email",
            name: "email",
            label: "Email",
            inputRef: inputRefs.email,
        },
        {
            id: 2,
            type: "password",
            name: "password",
            label: "Mật khẩu",
            inputRef: inputRefs.password,
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { email, password } = formData;
            const res = await signinApi(email, password);
            // Handle successful response here
            if (res) {
                localStorage.setItem("access_token", res.accessToken);
                alert("Đăng nhập thành công!");
                console.log(res);
            }
        } catch (error) {
            // Handle error here
            alert("Email/ mật khẩu không hợp lệ!");
            console.log(error);
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
                    Đăng nhập để bắt đầu
                </span>
            </p>
            <form className="*:my-2 flex flex-col" onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <Input
                        key={input.id}
                        {...input}
                        onChange={handleChange}
                        className="p-2 "
                    />
                ))}
                <Button
                    type="submit"
                    className="py-4 rounded-2xl my-4 bg-purple-700 shadow-md shadow-gray-400"
                >
                    Đăng nhập
                </Button>
                <div className="flex">
                    <hr className="border-t-[1] grow m-auto border-gray-300"></hr>
                    <span className="mx-2 text-xl text-gray-500">HOẶC</span>
                    <hr className="border-t-[1] grow m-auto border-gray-300"></hr>
                </div>
                <Button
                    className="py-4 rounded-2xl my-4 bg-red-500"
                    onClick={() => alert("Đăng nhập qua Google")}
                >
                    Đăng nhập qua Google
                </Button>
                <Button
                    className="py-4 rounded-2xl my-4 bg-blue-500"
                    onClick={() => alert("Đăng nhập qua Facebook")}
                >
                    Đăng nhập qua Facebook
                </Button>
            </form>
        </div>
    );
}
