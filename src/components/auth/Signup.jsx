import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "../../utils/validationSchema";
import { signupApi } from "../../api/auth/signup";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import HomeIcon from "../../assets/icons/HomeIcon";

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
			await validationSchema.validate(formData, {
				abortEarly: false,
			});
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

	const handleLogin = () => {
		navigate("/signin");
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
				onClick={handleLogin}
				className="btn btn-ghost absolute top-0 right-0 m-8 rounded-2xl bg-purple-700 border-purple-700 hover:border-purple-700 border-2 text-white text-base hover:text-purple-700 hover:bg-white "
			>
				Đăng nhập
			</button>
			<p className="flex flex-col">
				<span className="font-extrabold text-4xl">
					Welcome to Inglish!
				</span>
				<span className="text-center mt-6 mb-12">
					Hãy tạo một tài khoản để bắt đầu
				</span>
			</p>
			<form
				className="*:my-2 flex flex-col w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5"
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
								{
									errors[
										input
											.name
									]
								}
							</span>
						)}
					</>
				))}
				<button
					type="submit"
					className="btn btn-ghost rounded-2xl border-2 w-full border-purple-700 hover:border-purple-700 bg-purple-700  text-white text-base hover:text-purple-700 hover:bg-white "
				>
					Đăng ký
				</button>
				<div className="flex">
					<hr className="border-t-[1] grow m-auto border-gray-300"></hr>
					<span className="mx-2 text-xl text-gray-500">
						HOẶC
					</span>
					<hr className="border-t-[1] grow m-auto border-gray-300"></hr>
				</div>
				<button
					className="text-base btn btn-ghost rounded-2xl border-2 w-full border-black hover:bg-gray-200 hover:border-black"
					onClick={() =>
						alert("Đăng ký qua Google")
					}
				>
					{" "}
					<GoogleIcon />
					Đăng ký qua Google
				</button>
				<button
					className="text-base btn btn-ghost rounded-2xl border-2 w-full border-black hover:bg-gray-200 hover:border-black"
					onClick={() =>
						alert("Đăng ký qua Facebook")
					}
				>
					<FacebookIcon />
					Đăng ký qua Facebook
				</button>
			</form>
		</div>
	);
}
