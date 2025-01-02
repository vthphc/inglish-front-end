import React, { useState, useEffect, useContext } from "react";
import HistoryCard from "./HistoryCard";
import { getExamHistory } from "../../../api/users/userTakenExams";
import { AuthContext } from "../../context/auth.context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ExamHistory() {
	const [loading, setLoading] = useState(true);
	const { auth } = useContext(AuthContext);
	const [history, setHistory] = useState([]);

	useEffect(() => {
		const fetchHistory = async () => {
			const res = await getExamHistory(auth.user.userId);
			setHistory(res);
			setLoading(false);
		};
		fetchHistory();
	}, []);
	return (
		<div>
			{loading === true ? (
				<div
					style={{
						position: "fixed",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}>
					<span className="loading loading-spinner loading-lg text-purple-700"></span>
				</div>
			) : (
				<>
					{/* <button
						onClick={() => {
							console.log(history);
						}}
						className="btn btn-ghost">
						console.log(history)
					</button> */}
					<div className="mx-16 sm:mx-24 md:mx-40 lg:mx-80 flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
						{history.map((item, index) => {
							return (
								<HistoryCard
									key={
										item._id
									}
									data={
										item
									}
								/>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
}
