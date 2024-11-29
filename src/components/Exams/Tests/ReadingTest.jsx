import React, { useEffect, useState, useContext } from "react";
import { getLessonByIdApi } from "../../../api/exams/lessonId";
import RectangleIcon from "../../../assets/icons/RectangleIcon";
import { TestContext } from "../../context/test.context";

export default function ReadingTest(props) {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState();
	const [questions, setQuestions] = useState([]);
	const { answers, setAnswers } = useContext(TestContext);
	const { correctAnswers, setCorrectAnswers } = useContext(TestContext);
	useEffect(() => {
		const fetchLesson = async () => {
			const res = await getLessonByIdApi(props.lessonId);
			setLoading(false);
			setData(res);
			setQuestions(res.questions);
			//TODO: Đặt correct answer vào 1 cái global state object (trong context)
			setCorrectAnswers(
				res.questions.reduce(
					(acc, { _id, correctAnswer }) => {
						acc[_id] = correctAnswer;
						return acc;
					},
					{}
				)
			);
		};
		fetchLesson();
	}, []);

	const handleChange = (questionId, value) => {
		setAnswers((prevAnswers) => ({
			...prevAnswers,
			[questionId]: value,
		}));
	};

	const compareObjects = (obj1, obj2) => {
		let matchCount = 0;
		const allKeys = new Set([
			...Object.keys(obj1),
			...Object.keys(obj2),
		]);

		const result = {};
		allKeys.forEach((key) => {
			if (obj1[key] === obj2[key]) {
				result[key] = true; // Property matches
				matchCount++;
			} else {
				result[key] = false; // Property does not match
			}
		});

		return {
			correctAnswers: `${matchCount}/${allKeys.size}`,
			result,
		};
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Correct Answers:", correctAnswers);
		console.log("Selected Answers:", answers);
		const comparison = compareObjects(correctAnswers, answers);
		console.log(comparison);
	};

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
				<div className="">
					<h1 className="text-4xl font-bold">
						{data.title}
					</h1>
					<br />
					{/* <button
						className="btn"
						onClick={() => {
							console.log(
								correctAnswers
							);
						}}
					>
						In res
					</button> */}
					<p>{data.contentUrl}</p>
					<form
						onSubmit={handleSubmit}
						className="mt-4"
					>
						<div className="flex flex-col gap-4">
							{questions.map(
								(
									question,
									index
								) => (
									<div
										key={
											question._id
										}
										className="flex flex-col gap-2 mt-2"
									>
										<p className="flex flex-row">
											<RectangleIcon
												fill={`rgba(126,34,206,1)`}
												stroke={`rgba(126,34,206,1)`}
											/>
											<span className="text-2xl font-bold ml-2">
												{`QUESTION ${
													index +
													1
												}`}
											</span>
										</p>
										<span className="mb-2 mt-2">
											{
												question.questionName
											}
										</span>
										{question.questionOptions.map(
											(
												option,
												index
											) => (
												<label
													key={
														index
													}
													className="flex gap-2"
												>
													<input
														required
														className="radio primary"
														type="radio"
														name={
															question._id
														}
														value={
															option
														}
														onChange={(
															e
														) =>
															handleChange(
																question._id,
																e
																	.target
																	.value
															)
														}
													/>
													<span className="ml-4">
														{
															option
														}
													</span>
												</label>
											)
										)}
									</div>
								)
							)}
						</div>
						{/* <div className="flex flex-row-reverse">
							<button
								type="submit"
								className="btn btn-ghost rounded-2xl bg-purple-700 border-purple-700 hover:border-purple-700 border-2 text-white text-base hover:text-purple-700 hover:bg-white my-8 mx-16"
							>
								Submit
							</button>
						</div> */}
					</form>
				</div>
			)}
		</div>
	);
}
