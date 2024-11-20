import React, { useEffect, useState } from "react";
import { getLessonByIdApi } from "../../../api/exams/lessonId";

export default function ListeningTest(props) {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState();
	useEffect(() => {
		const fetchLesson = async () => {
			const res = await getLessonByIdApi(props.lessonId);
			setLoading(false);
			setData(res);
		};
		fetchLesson();
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
					<span>{props.lessonId}</span>
					<button
						className="btn"
						onClick={() => {
							console.log(data);
						}}
					>
						In res
					</button>
				</div>
			)}
		</div>
	);
}
