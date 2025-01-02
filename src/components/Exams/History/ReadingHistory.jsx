import React, { useEffect, useState } from "react";
import { readingAI } from "../../../api/ai/ai-explanation";
import CheckIcon from "../../../assets/icons/CheckIcon";
import CrossIcon from "../../../assets/icons/CrossIcon";
import RectangleIcon from "../../../assets/icons/RectangleIcon";

export default function ReadingHistory({ lessonId, content, selectedAnswers }) {
	const [explanation, setExplanation] = useState(null);
	const defaultCheck = (questionId, userAnswersArray) => {
		const match = userAnswersArray.find(
			(userAnswer) => userAnswer.questionId === questionId
		);
		return match ? match.selectedAnswer : null; // Return selectedAnswer if found, else null.
	};

	const crossRender = (questionId, userAnswersArray) => {
		const match = userAnswersArray.findIndex(
			(userAnswer) => userAnswer.questionId === questionId
		);
		if (userAnswersArray[match].isCorrect === false) {
			return true;
		}
		return false;
	};

	useEffect(() => {
		const fetchExplanation = async () => {
			const res = await readingAI(
				lessonId,
				content.questions
			);
			setExplanation(res.questions);
		};
		fetchExplanation();
		console.log(content);
	}, []);

	// const compare = (option, userAnswer) => {
	// 	console.log("option: ", option);
	// 	console.log("userAnswer: ", userAnswer);
	// 	if (option === userAnswer) {
	// 		return true;
	// 	}
	// 	return false;
	// };

	return (
		<div className="">
			<h1 className="text-4xl font-bold">{content.title}</h1>
			<br />
			<p className="m-auto">{content.contentURL}</p>
			<form className="mt-4">
				<div className="flex flex-col gap-4">
					{content.questions.map(
						(question, index) => (
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
												className="radio primary"
												type="radio"
												name={
													question._id
												}
												value={
													option
												}
												disabled
												defaultChecked={
													option ===
													defaultCheck(
														question._id,
														selectedAnswers
													)
												}
											/>
											<span className="ml-4 inline-flex items-center gap-4">
												{
													option
												}
												{option ===
												defaultCheck(
													question._id,
													selectedAnswers
												) ? (
													crossRender(
														question._id,
														selectedAnswers
													) ? (
														<CrossIcon
															fill={
																"red"
															}
														/>
													) : (
														<CheckIcon
															fill={
																"green"
															}
														/>
													)
												) : null}
											</span>
										</label>
									)
								)}
								<div className="collapse bg-base-200">
									<input type="checkbox" />
									<div className="collapse-title text-purple-700 font-bold font-roboto">
										Answer
									</div>
									<div className="collapse-content">
										<p>
											{
												question.correctAnswer
											}
										</p>
									</div>
								</div>
							</div>
						)
					)}
				</div>
			</form>
		</div>
	);
}
