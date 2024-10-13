import React from "react";
import { useRef } from "react";
import { Button, Input } from "@material-tailwind/react";

export default function SampleComponent() {
    const usernameRef = useRef("");
    // const emailRef = useRef("");
    // const passwordRef = useRef("");
    // const confirmPasswordRef = useRef("");

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

    console.log(usernameRef);
    return (
        <div className="flex justify-center items-center min-h-screen">
            <form className="*:m-2" onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <Input key={input.id} {...input} />
                ))}
                <Button type="submit" className="bg-purple-700">
                    Submit
                </Button>
            </form>
        </div>
    );
}
