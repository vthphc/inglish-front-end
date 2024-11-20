import React, { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { changePasswordSchema } from "../../utils/validationSchema";
import { AuthContext } from "../context/auth.context";
import { changeInfoApi } from "../../api/auth/change-info";

export default function Profile() {
	const navigate = useNavigate();
	const { auth, setAuth, loading, setLoading } = useContext(AuthContext);

	const inputRefs = {
		username: useRef(""),
		email: useRef(""),
		oldPassword: useRef(""),
		newPassword: useRef(""),
	};

	const [formData, setFormData] = useState({
		username: auth.user.username,
		email: auth.user.email,
		oldPassword: "",
		newPassword: "",
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
			disabled: true,
		},
		{
			id: 3,
			type: "password",
			name: "oldPassword",
			label: "Mật khẩu hiện tại",
			inputRef: inputRefs.oldPassword,
			value: formData.oldPassword,
		},
		{
			id: 4,
			type: "password",
			name: "newPassword",
			label: "Mật khẩu mới",
			inputRef: inputRefs.newPassword,
			value: formData.newPassword,
		},
	];

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await changePasswordSchema.validate(formData, {
				abortEarly: false,
			});
			// console.log("Form submitted", formData);
			const { username, email, oldPassword, newPassword } =
				formData;
			const res = await changeInfoApi(
				username,
				email,
				oldPassword,
				newPassword
			);
			if (!res.errorCode) {
				alert("Đổi thông tin thành công");
			} else if (res.errorCode === "EC0")
				alert("Email không hợp lệ!");
			else res.errorCode === "EC1";
			alert("Mật khẩu cũ không hợp lệ!");
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
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	setLoading(false);
	return (
		<div>
			{loading === true ? (
				<div
					style={{
						position: "fixed",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%",
					}}
				>
					<span className="loading loading-spinner loading-lg text-purple-700"></span>
				</div>
			) : (
				<div className="flex flex-col border-2 p-6 xs:w-fit w-full m-auto rounded-xl h-fit">
					<p className="font-bold text-4xl self-center">
						Hồ sơ cá nhân
					</p>
					<div
						tabIndex={0}
						className="btn btn-ghost btn-circle avatar placeholder border-gray-300 border-2 transition-all self-center mt-6 w-24 h-24"
					>
						<div className="w-20 h-20 rounded-full bg-white">
							{auth.isAuthenticated ? (
								<span className="text-purple-700 text-3xl">{`${Array.from(
									auth
										?.user
										?.username
								)[0].toUpperCase()}`}</span>
							) : (
								<span className="loading loading-spinner loading-md"></span>
							)}
						</div>
					</div>
					<form
						className="flex flex-col mt-6 self-center sm:w-[500px] w-full"
						onSubmit={handleSubmit}
					>
						{inputs.map((input) => (
							<>
								<label className="form-control w-full ">
									<div className="label">
										<span className="label-text font-bold text-lg">
											{
												input.label
											}
										</span>
									</div>
									<input
										key={
											input.id
										}
										{...input}
										onChange={
											handleChange
										}
										className="input input-bordered input-lg w-full"
									/>
								</label>
								{errors[
									input
										.name
								] && (
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
							className="btn btn-ghost mt-8 rounded-2xl bg-purple-700 shadow-md shadow-gray-400 text-white text-lg hover:text-purple-700 hover:bg-white"
						>
							Lưu thay đổi
						</button>
					</form>
				</div>
			)}
		</div>
	);
}
