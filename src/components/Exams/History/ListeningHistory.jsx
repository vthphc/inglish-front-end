import React from "react";
import RectangleIcon from "../../../assets/icons/RectangleIcon";
import CrossIcon from "../../../assets/icons/CrossIcon";
import CheckIcon from "../../../assets/icons/CheckIcon";

export default function ListeningHistory({lessonId, content, selectedAnswers }) {
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

	// const compare = (option, userAnswer) => {
	//     console.log("option: ", option);
	//     console.log("userAnswer: ", userAnswer);
	// 	if (option === userAnswer) {
	// 		return true;
	// 	}
	// 	return false;
	// };

	return (
		<div className="">
			<h1 className="text-4xl font-bold">{content.title}</h1>
			<br />
			<audio
				className="m-auto"
				controls
				src={content.contentURL}></audio>
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
												disabled
												className={`radio `}
												type="radio"
												name={
													question._id
												}
												value={
													option
												}
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
							</div>
						)
					)}
				</div>
			</form>
		</div>
	);
}
