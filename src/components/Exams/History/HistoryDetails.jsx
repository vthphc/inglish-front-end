import React, { useEffect, useState, useContext } from "react";
import { getExamByIdApi } from "../../../api/exams/examId";
import { getExamHistoryById } from "../../../api/users/userTakenExams";
import { AuthContext } from "../../context/auth.context";

export default function HistoryDetails(props) {
	const { auth } = useContext(AuthContext);
	const [loading, setLoading] = useState(true);
	const [original, setOriginal] = useState();
	const [history, setHistory] = useState();
	useEffect(() => {
		const fetchDetails = async () => {
			const historyRes = await getExamHistoryById(
				auth.user.userId,
				props.historyId
			);
			const originalExamRes = await getExamByIdApi(
				historyRes.examId
			);
			setHistory(historyRes);
			setOriginal(originalExamRes);
			setLoading(false);
		};
		fetchDetails();
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
				<>
					<button
						className="btn btn-ghost"
						onClick={() => {
							console.log(original);
						}}>
						In original
					</button>
					<button
						className="btn btn-ghost"
						onClick={() => {
							console.log(history);
						}}>
						In History
					</button>
					<div className="sm:mx-24 md:mx-32 lg:mx-40 xl:mx-60 flex flex-col border-2 border-gray-200 rounded-lg py-4 px-8">
						History Details
					</div>
				</>
			)}
		</div>
	);
}
