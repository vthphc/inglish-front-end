import React, { useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { getAccountApi } from "../../api/auth/account";
import Header from "../Layout/Header/Header";

export default function Home() {
	const { auth, setAuth } = useContext(AuthContext);
	useEffect(() => {
		const fetchAccount = async () => {
			try {
				const res = await getAccountApi();
				console.log(res);
				console.log(auth);
			} catch (error) {
				console.log(error);
			}
		};
		fetchAccount();
	}, []);
	return <div>Home</div>;
}
