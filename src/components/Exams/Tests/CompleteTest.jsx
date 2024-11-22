import React, { useEffect, useState } from "react";
import { getExamByIdApi } from "../../../api/exams/examId";

export default function CompleteTest(props) {
	const [loading, setLoading] = useState(true);
	const [content, setContent] = useState([]);
	const [data, setData] = useState();
	useEffect(() => {
		const fetchExam = async () => {
			const res = await getExamByIdApi(props.examId);
			setLoading(false);
			setData(res);
			setContent(res.content);
			console.log(res.content);
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
						transform: "translate(-50%, -50%)",
					}}
				>
					<span className="loading loading-spinner loading-lg text-purple-700"></span>
				</div>
			) : (
				<div className="sm:mx-24 md:mx-32 lg:mx-40 xl:mx-60 flex flex-col border-2 border-gray-200 rounded-lg py-4 px-8 my-16">
					<h1>{props.examId}</h1>
					<div
						role="tablist"
						className="tabs tabs-lifted"
					>
						{content.map((item, index) => {
							return (
								<>
									<input
										type="radio"
										name={`my_tabs`}
										role="tab"
										className="text-base tab checked:text-blue-700 checked:font-bold [--tab-bg:#BFDBFE] [--tab-border-color:#BFDBFE]"
										aria-label="Tab content 1"
									/>
									<div
										role="tabpanel"
										className="tab-content py-10"
									>
										{
											item.title
										}
									</div>
								</>
							);
						})}
					</div>
					{/* <div
						role="tablist"
						className="tabs tabs-lifted"
					>
						<input
							type="radio"
							name="my_tabs_1"
							role="tab"
							className="text-base tab checked:text-blue-700 checked:font-bold [--tab-bg:#BFDBFE] [--tab-border-color:#BFDBFE] "
							aria-label="Tab content 1"
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
							aria-label="Tab content 2"
						/>
						<div
							role="tabpanel"
							className="tab-content py-10"
						>
							<button className="btn">
								Làm test
							</button>
						</div>
					</div> */}
				</div>
			)}
		</div>
	);
}
