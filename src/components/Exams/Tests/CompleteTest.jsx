import React, { useEffect, useState, useContext } from "react";
import { getExamByIdApi } from "../../../api/exams/examId";
import { TestWrapper } from "../../context/test.context";
import { TestContext } from "../../context/test.context";
import ListeningTest from "./ListeningTest";
import ReadingTest from "./ReadingTest";

export default function CompleteTest(props) {
	const { test, setTest } = useContext(TestContext);
	const { answers, setAnswers } = useContext(TestContext);
	const { correctAnswers, setCorrectAnswers } = useContext(TestContext);
	const [loading, setLoading] = useState(true);
	const [content, setContent] = useState([]);
	const [data, setData] = useState();
	useEffect(() => {
		//TODO: Bỏ vào context test
		const fetchExam = async () => {
			const res = await getExamByIdApi(props.examId);
			setLoading(false);
			setData(res);
			setContent(res.content);
			console.log(res.content);
		};
		fetchExam();
	}, []);

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
		setAnswers({});
		setCorrectAnswers({});
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
					}}
				>
					<span className="loading loading-spinner loading-lg text-purple-700"></span>
				</div>
			) : (
				<div className="sm:mx-24 md:mx-32 lg:mx-40 xl:mx-60 flex flex-col border-2 border-gray-200 rounded-lg py-4 px-8 my-16">
					<form
						onSubmit={handleSubmit}
						id="completeTest"
						role="tablist"
						className="tabs tabs-lifted tabs-lg"
					>
						{content.map((item, index) => {
							//TODO: Test thử đổi vị trí cho tất cả input gần nhau, xem có bị lỗi không - KHÔNG ĐƯỢC
							//TODO: Loop qua 2 lần để tạo ra 1 set radio button và 1 set divs - KHÔNG ĐƯỢC
							return (
								<React.Fragment
									key={
										index
									}
								>
									<input
										key={
											index
										}
										type="radio"
										name={`my_tabs`}
										role="tab"
										className="text-base tab checked:text-blue-700 checked:font-bold [--tab-bg:#BFDBFE] [--tab-border-color:#BFDBFE]"
										aria-label={`Tab ${item.title}`}
										defaultChecked={
											index ===
											0
										}
									/>
									<div
										role="tabpanel"
										className="tab-content py-10"
									>
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
							form="completeTest"
							type="submit"
							className="btn btn-ghost rounded-2xl bg-purple-700 border-purple-700 hover:border-purple-700 border-2 text-white text-base hover:text-purple-700 hover:bg-white my-8 mx-16"
						>
							Submit
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
