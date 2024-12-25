import React, { useEffect, useState, useContext } from "react";
import { getExamByIdApi } from "../../../api/exams/examId";
import { getExamHistoryById } from "../../../api/users/userTakenExams";
import { AuthContext } from "../../context/auth.context";
import ReadingHistory from "./ReadingHistory";
import ListeningHistory from "./ListeningHistory";

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
					{/* <button
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
					</button> */}
					<div className="sm:mx-24 md:mx-32 lg:mx-40 xl:mx-60 flex flex-col border-2 border-gray-200 rounded-lg py-4 px-8 my-16">
						<form
							id="completeTest"
							role="tablist"
							className="tabs tabs-lifted tabs-lg">
							{original.content.map(
								(
									item,
									index
								) => {
									return (
										<React.Fragment
											key={
												index
											}>
											<input
												key={
													index
												}
												type="radio"
												name={`my_tabs`}
												role="tab"
												className="text-base tab text-nowrap checked:text-blue-700 checked:font-bold [--tab-bg:#BFDBFE] [--tab-border-color:#BFDBFE]"
												aria-label={`Tab ${item.title}`}
												defaultChecked={
													index ===
													0
												}
											/>
											<div
												role="tabpanel"
												className="tab-content py-10">
												{item.type ===
												"listening" ? (
													<ListeningHistory
														lessonId={
															item._id
														}
														content={
															item
														}
														selectedAnswers={
															history.selectedAnswers
														}
													/>
												) : (
													<ReadingHistory
														lessonId={
															item._id
														}
														content={
															item
														}
														selectedAnswers={
															history.selectedAnswers
														}
													/>
												)}
											</div>
										</React.Fragment>
									);
								}
							)}
						</form>
					</div>
				</>
			)}
		</div>
	);
}
