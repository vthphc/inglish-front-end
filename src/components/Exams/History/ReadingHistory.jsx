import React from "react";
import RectangleIcon from "../../../assets/icons/RectangleIcon";

export default function ReadingHistory({ content, selectedAnswers }) {
	const defaultCheck = (questionId, userAnswersArray) => {
		const match = userAnswersArray.find(
			(userAnswer) => userAnswer.questionId === questionId
		);
		return match ? match.selectedAnswer : null; // Return selectedAnswer if found, else null.
	};
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
			</form>
		</div>
	);
}
