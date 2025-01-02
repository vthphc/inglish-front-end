import React from "react";
import { useRef, useState, useContext } from "react";
import { Button, Input } from "@material-tailwind/react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import { signinApi } from "../../api/auth/signin";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import HomeIcon from "../../assets/icons/HomeIcon";

export default function Signin() {
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);
    const inputRefs = {
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
            console.log(res);
            // Handle successful response here
            if (res.accessToken) {
                localStorage.setItem("access_token", res.accessToken);
                alert("Đăng nhập thành công!");
                setAuth({
                    isAuthenticated: true,
                    user: {
                        email: res?.user?.email ?? "",
                        username: res?.user?.username ?? "",
                        userId: res?.user?.userId ?? "",
                    },
                });
                navigate("/home");
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

    const handleSignup = () => {
        navigate("/signup");
    };

    const handleLanding = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen ">
            {" "}
            <button
                onClick={handleLanding}
                className="px-2 btn btn-ghost absolute top-0 left-0 m-8 rounded-2xl bg-purple-700 border-purple-700 hover:border-purple-700 border-2 text-white text-base hover:text-purple-700 hover:bg-white "
            >
                <HomeIcon />
            </button>
            <button
                onClick={handleSignup}
                className="btn btn-ghost absolute top-0 right-0 m-8 rounded-2xl bg-purple-700 border-purple-700 hover:border-purple-700 border-2 text-white text-base hover:text-purple-700 hover:bg-white "
            >
                Đăng ký
            </button>
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
                <button
                    type="submit"
                    className="btn btn-ghost w-full rounded-2xl bg-purple-700 border-purple-700 hover:border-purple-700 border-2 text-white text-base hover:text-purple-700 hover:bg-white "
                >
                    Đăng nhập
                </button>
                <div className="flex">
                    <hr className="border-t-[1] grow m-auto border-gray-300"></hr>
                    <span className="mx-2 text-xl text-gray-500">HOẶC</span>
                    <hr className="border-t-[1] grow m-auto border-gray-300"></hr>
                </div>
                <button
                    className="text-base btn btn-ghost rounded-2xl border-2 w-full border-black hover:bg-gray-200 hover:border-black"
                    onClick={() => alert("Đăng nhập qua Google")}
                >
                    <GoogleIcon />
                    Đăng nhập qua Google
                </button>
                <button
                    className="text-base btn btn-ghost rounded-2xl border-2 w-full border-black hover:bg-gray-200 hover:border-black"
                    onClick={() => alert("Đăng nhập qua Facebook")}
                >
                    <FacebookIcon />
                    Đăng nhập qua Facebook
                </button>
            </form>
        </div>
    );
}
