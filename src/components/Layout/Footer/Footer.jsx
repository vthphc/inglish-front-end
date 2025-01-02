import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	const handleLogout = () => {
		setAuth({
			isAuthenticated: false,
			user: null,
		});
		localStorage.removeItem("access_token");
		navigate("/");
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="bg-purple-700 sm:p-16 ">
			<div className="text-white mx-4 text-lg lg:text-md sm:mx-20 md:mx-40 lg:mx-60 xl:mx-70 2xl:mx-80 mb-16 ">
				{" "}
				<Link
					to={"/"}
					className="block sm:mx-auto cursor-pointer w-fit text-white text-6xl font-bold tracking-widest">
					inglish
				</Link>
				<div className="mt-10 grid grid-cols-2 sm:grid sm:grid-cols-3 gap-4">
					<div className="sm:mx-auto">
						<h2 className="font-bold">
							Về inglish
						</h2>
						<ul>
							<li>
								<Link
									onClick={
										scrollToTop
									}
									to={
										"/contact-us"
									}
									className="hover:underline">
									Giới
									thiệu
								</Link>
							</li>
							<li>
								<Link
									onClick={
										scrollToTop
									}
									to={
										"/contact-us"
									}
									className="hover:underline">
									Liên hệ
								</Link>
							</li>
							<li>
								<Link
									onClick={
										scrollToTop
									}
									to={
										"/contact-us"
									}
									className="hover:underline">
									Điều
									khoản
								</Link>
							</li>
						</ul>
					</div>
					<div className="sm:mx-auto">
						<h2 className="font-bold">
							Tài nguyên
						</h2>
						<ul>
							<li>
								<Link
									onClick={
										scrollToTop
									}
									to={
										"/exams"
									}
									className="hover:underline">
									Thư viện
									đề thi
								</Link>
							</li>
						</ul>
					</div>
					<div className="sm:mx-auto">
						<h2 className="font-bold">
							Người dùng
						</h2>
						<ul>
							<li>
								<Link
									onClick={
										scrollToTop
									}
									to={
										"/profile"
									}
									className="hover:underline">
									Hồ sơ
								</Link>
							</li>
							<li>
								<Link className="hover:underline">
									Cài đặt
								</Link>
							</li>
							<li>
								<button
									onClick={
										handleLogout
									}
									className="hover:underline">
									Đăng
									xuất
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className="lg:mx-80" />
			<div className="mx-80 mt-8"></div>
		</div>
	);
}
