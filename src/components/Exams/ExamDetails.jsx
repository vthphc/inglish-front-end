import React, { useEffect, useState } from "react";
import { getExamByIdApi } from "../../api/exams/examId";
import { getLessonByIdApi } from "../../api/exams/lessonId";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BadgeType from "./BadgeType";

export default function ExamDetails(props) {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [content, setContent] = useState([]);
	const [data, setData] = useState();
	useEffect(() => {
		const fetchExam = async () => {
			const res = await getExamByIdApi(props.examId);
			setLoading(false);
			setData(res);
		};
		fetchExam();
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
					}}
				>
					<span className="loading loading-spinner loading-lg text-purple-700"></span>
				</div>
			) : (
				<div className="sm:mx-24 md:mx-32 lg:mx-40 xl:mx-60 flex flex-col border-2 border-gray-200 rounded-lg py-4 px-8">
					<p className="text-4xl font-bold">
						{data.title}
					</p>
					<div className="my-4">
						<p className="bg-blue-100 text-blue-700 font-bold text-lg rounded-full py-1 px-4 w-fit">
							Nội dung thi
						</p>
						<p className="border-2 border-gray-300 py-1 px-4 w-fit mt-4 flex rounded-lg flex-col">
							{data.content.map(
								(
									item,
									index
								) => {
									return (
										<div
											className="flex flex-row"
											key={
												index
											}
										>
											<div>
												<span>
													{
														item.title
													}
												</span>
												<BadgeType
													type={
														item.type
													}
												/>
											</div>
										</div>
									);
								}
							)}
						</p>
					</div>
					<div
						role="tablist"
						className="tabs tabs-lifted"
					>
						<input
							type="radio"
							name="my_tabs_1"
							role="tab"
							className="text-base tab checked:text-blue-700 checked:font-bold [--tab-bg:#BFDBFE] [--tab-border-color:#BFDBFE] "
							aria-label="Luyện tập"
							defaultChecked
						/>
						<div
							role="tabpanel"
							className="tab-content py-10"
						>
							Tab content 1
						</div>

						<input
							type="radio"
							name="my_tabs_1"
							role="tab"
							className="text-base tab checked:text-blue-700 checked:font-bold [--tab-bg:#BFDBFE] [--tab-border-color:#BFDBFE]"
							aria-label="Làm full test"
						/>
						<div
							role="tabpanel"
							className="tab-content py-10"
						>
							<button
								onClick={() => {navigate("test")}}
								className="btn btn-ghost bg-white text-purple-700 border-2 border-purple-700 hover:bg-purple-700 hover:text-white w-1/4"
							>
								Làm full test
							</button>
						</div>
					</div>
					{/* <button
						className="btn"
						onClick={() => {
							console.log(data);
						}}
					>
						In res
					</button> */}
				</div>
			)}
		</div>
	);
}
