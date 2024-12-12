import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { getAccountApi } from "../../api/auth/account";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const [loading, setLoading] = useState(true);
	const { auth } = useContext(AuthContext);
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 500);

		return () => clearTimeout(timer);
	}, []);
	return (
		<div>
			{loading === true ? (
				<div
					style={{
						position: "fixed",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%",
					}}>
					<span className="loading loading-spinner loading-lg text-purple-700"></span>
				</div>
			) : (
				<div className="">
					<div className="lg:px-80 px-12 py-4 bg-blue-gray-100 ">
						<p className="text-xl lg:text-3xl text-blue-800">
							Hello{" "}
							<span className="font-bold">
								{auth.user.username
									.charAt(
										0
									)
									.toUpperCase() +
									auth.user.username.slice(
										1
									)}
							</span>
							!
						</p>
						<br />
						<p className="text-xl lg:text-2xl text-blue-900">
							Bookmarks của tôi:{" "}
						</p>
						<p className="text-xl lg:text-2xl text-blue-900">
							Flashcards của tôi:
						</p>
						<p className="text-xl lg:text-2xl text-blue-900">
							Đề thi mới nhất:
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
