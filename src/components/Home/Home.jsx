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
		}, 1000);

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
					}}
				>
					<span className="loading loading-spinner loading-lg text-purple-700"></span>
				</div>
			) : (
				<div className="mx-80">
					<p>{auth.user.username}</p>
					<p>{auth.user.email}</p>
					<p>{auth.user.userId}</p>
				</div>
			)}
		</div>
	);
}
