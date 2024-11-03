import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { getAccountApi } from "../../api/auth/account";
import Header from "../Layout/Header/Header";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const { auth, setAuth } = useContext(AuthContext);
	useEffect(() => {
		const fetchAccount = async () => {
			try {
				const res = await getAccountApi();
				if (res) {
					setAuth({
						isAuthenticated: true,
						user: {
							email: res.email,
							username: res.username,
							userId: res.userId,
						},
					});
				}
				console.log(res);
			} catch (error) {
				console.log(error);
			}
		};
		fetchAccount();
	}, []);
	return (
		<div>
			Home
		</div>
	);
}
