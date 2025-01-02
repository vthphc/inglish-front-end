import React, { useEffect, useState, useContext } from "react";
import { getExamByIdApi } from "../../../api/exams/examId";
import { postExamResult } from "../../../api/users/userTakenExams";
import { useNavigate } from "react-router-dom";
import { TestContext } from "../../context/test.context";
import { AuthContext } from "../../context/auth.context";
import ListeningTest from "./ListeningTest";
import ReadingTest from "./ReadingTest";

export default function CompleteTest(props) {
	const { answers, setAnswers } = useContext(TestContext);
	const { correctAnswers, setCorrectAnswers } = useContext(TestContext);
	const [loading, setLoading] = useState(true);
	const [content, setContent] = useState([]);
	const [data, setData] = useState();
	const { auth } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchExam = async () => {
			const res = await getExamByIdApi(props.examId);
			setLoading(false);
			setData(res);
			setContent(res.content);
		};
		fetchExam();
	}, []);

	const compareAnswers = (correctAnswers, userAnswers) => {
		let matchCount = 0;
		const result = correctAnswers.map((correctAnswer) => {
			const userAnswer = userAnswers.find(
				(answer) => answer._id === correctAnswer._id
			);
			const isCorrect =
				userAnswer &&
				userAnswer.answer === correctAnswer.answer;
			if (isCorrect) matchCount++;
			return {
				questionId: correctAnswer._id,
				selectedAnswer: userAnswer?.answer,
				isCorrect,
			};
		});
		return {
			score: `${matchCount}/${correctAnswers.length}`,
			result,
		};
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Correct Answers:", correctAnswers);
		console.log("Selected Answers:", answers);
		const comparison = compareAnswers(correctAnswers, answers);
		const resultData = {
			selectedAnswers: comparison.result,
			score: comparison.score,
		};
		console.log("Result Data:", resultData);
		const postRes = await postExamResult(
			auth.user.userId,
			props.examId,
			data.title,
			resultData
		);
		if (postRes) console.log("Status:", postRes);
		setAnswers([]);
		setCorrectAnswers([]);
		navigate("/result/" + props.examId);
	};

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
				<div className="sm:mx-24 md:mx-32 lg:mx-40 xl:mx-60 flex flex-col border-2 border-gray-200 rounded-lg py-4 px-8">
					<form
						onSubmit={handleSubmit}
						id="completeTest"
						role="tablist"
						className="tabs tabs-lifted tabs-lg">
						{content.map((item, index) => {
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
										className="text-base text-nowrap tab checked:text-blue-700 checked:font-bold [--tab-bg:#BFDBFE] [--tab-border-color:#BFDBFE]"
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
											<ListeningTest
												lessonId={
													item._id
												}
											/>
										) : (
											<ReadingTest
												lessonId={
													item._id
												}
											/>
										)}
									</div>
								</React.Fragment>
							);
						})}
					</form>
					<div className="flex flex-row-reverse">
						<button
							className="btn btn-ghost rounded-2xl bg-purple-700 border-purple-700 hover:border-purple-700 border-2 text-white text-base hover:text-purple-700 hover:bg-white my-8 mx-16"
							onClick={() =>
								document
									.getElementById(
										"submitModal"
									)
									.showModal()
							}>
							Submit
						</button>
						<dialog
							id="submitModal"
							className="modal">
							<div className="modal-box">
								<h3 className="font-bold text-lg">
									Bạn có
									chắc
									muốn nộp
									bài?
								</h3>
								<div className="flex justify-between mt-4">
									<button
										type="submit"
										form="completeTest"
										className="btn btn-ghost bg-purple-700 text-white hover:text-purple-700 hover:bg-white hover:border-purple-700 border-2">
										Có
									</button>
									<button
										onClick={() =>
											document
												.getElementById(
													"submitModal"
												)
												.close()
										}
										className="btn btn-ghost bg-purple-700 text-white hover:text-purple-700 hover:bg-white hover:border-purple-700 border-2">
										Không
									</button>
								</div>
							</div>
							<form
								method="dialog"
								className="modal-backdrop">
								<button>
									close
								</button>
							</form>
						</dialog>
					</div>
				</div>
			)}
		</div>
	);
}
