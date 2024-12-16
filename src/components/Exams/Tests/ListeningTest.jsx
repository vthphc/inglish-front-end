import React, { useEffect, useState, useContext } from "react";
import { getLessonByIdApi } from "../../../api/exams/lessonId";
import RectangleIcon from "../../../assets/icons/RectangleIcon";
import { TestContext } from "../../context/test.context";

export default function ListeningTest(props) {
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
			console.log("res questions: ", res.questions);
			//TODO: Đặt correct answer vào 1 cái global state object (trong context)
			// setCorrectAnswers(
			// 	res.questions.map((question) => ({
			// 		_id: question._id,
			// 		answer: question.correctAnswer,
			// 	}))
			// );
			const filterdAttributes = res.questions.map(
				({ _id, correctAnswer }) => ({
					_id,
					answer: correctAnswer,
				})
			);
			setCorrectAnswers((prevAnswers) => [
				...prevAnswers,
				...filterdAttributes,
			]);
		};
		fetchLesson();
	}, []);

	const handleChange = (id, newAnswer) => {
		setAnswers((prevItems) => {
			// Check if an item with the same id exists
			const itemExists = prevItems.some(
				(item) => item._id === id
			);

			if (itemExists) {
				// Update the existing item
				return prevItems.map((item) =>
					item._id === id
						? { ...item, answer: newAnswer }
						: item
				);
			} else {
				// Add a new item if it doesn't exist
				return [
					...prevItems,
					{ _id: id, answer: newAnswer },
				];
			}
		});
	};

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
				_id: correctAnswer._id,
				isCorrect,
			};
		});
		return {
			correctAnswers: `${matchCount}/${correctAnswers.length}`,
			result,
		};
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const comparison = compareAnswers(correctAnswers, answers);
		console.log("Selected Answers:", answers);
		console.log("Comparison result: ", comparison);
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
					}}>
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
						}}>
						In res
					</button> */}
					<audio
						className="m-auto"
						controls
						src={data.contentURL}></audio>
					<form
						onSubmit={handleSubmit}
						className="mt-4">
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
										className="flex flex-col gap-2 mt-2">
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
													className="flex gap-2">
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
								className="btn btn-ghost rounded-2xl bg-purple-700 border-purple-700 hover:border-purple-700 border-2 text-white text-base hover:text-purple-700 hover:bg-white my-8 mx-16">
								Submit
							</button>
						</div> */}
					</form>
				</div>
			)}
		</div>
	);
}
