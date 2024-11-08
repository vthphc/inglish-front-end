import React, { useContext, useEffect } from "react";
import Header from "./Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { getAccountApi } from "../../api/auth/account";

export default function PageLayout() {
	const navigate = useNavigate();
	const { auth, setAuth, loading, setLoading } = useContext(AuthContext);
	useEffect(() => {
		const fetchAccount = async () => {
			setLoading(true);
			try {
				const res = await getAccountApi();
				if (!res.errorCode) {
					setAuth({
						isAuthenticated: true,
						user: {
							email: res.email,
							username: res.username,
							userId: res.userId,
						},
					});
				} else {
					navigate("/");
				}
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		fetchAccount();
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
				<>
					<Header />
					<div className="mt-12 ">
						<Outlet />
					</div>
				</>
			)}
		</div>
	);
}
