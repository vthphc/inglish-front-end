import React, { useEffect, useState } from "react";
import { getExamsApi } from "../../api/exams/exams";
import ExamCard from "./ExamCard";
import IconBookmark from "../../assets/icons/IconBookmark";

export default function Exams() {
	const [exams, setExams] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchExams = async () => {
			setLoading(true);
			try {
				const res = await getExamsApi();
				if (res) {
					setExams(res);
				}
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		fetchExams();
	}, []); //Lấy data từ api
	const examsData = [
		{ title: "Card 1", number: 1 },
		{ title: "Card 2", number: 2 },
		{ title: "Card 3", number: 3 },
		{ title: "Card 4", number: 4 },
		{ title: "Card 5", number: 5 },
		{ title: "Card 6", number: 6 },
		{ title: "Card 7", number: 7 },
		{ title: "Card 8", number: 8 },
		{ title: "Card 9", number: 9 },
		{ title: "Card 10", number: 10 },
	]; //Data thật của number thì lấy content trong exams xong đếm số phần tử mảng
	const examsJsonHandler = () => {
		console.log(exams);
	};
	const countParts = (array) => {
		return array.length;
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
				<>
					<div className="sm:mx-24 md:mx-32 lg:mx-40 xl:mx-60 flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4">
						{exams.map((item, index) => {
							return (
								<ExamCard
									key={
										index
									}
									title={
										item.title
									}
									number={countParts(
										item.content
									)}
									id={
										item._id
									}
								/>
							);
						})}
					</div>
					<button
						onClick={examsJsonHandler}
						className="btn btn-ghost bg-white text-purple-700 border-2 border-purple-700 hover:bg-purple-700 hover:text-white"
					>
						console.log(exams)
					</button>
				</>
			)}
		</div>
	);
}
