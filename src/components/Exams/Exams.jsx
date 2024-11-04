import React from "react";
import ExamCard from "./ExamCard";
import IconBookmark from "../../assets/icons/IconBookmark";

export default function Exams() {
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
	];//Data thật của number thì lấy content trong exams xong đếm số phần tử mảng
	return (
		<div className="mx-80 grid 2xl:grid-cols-4 xl:grid-cols-2 ">
			{examsData.map((item, index) => {
				return (
					<div
						key={index}
						className="card bg-base-100 w-auto shadow-xl m-4 border-2 border-purple-100"
					>
						<div className="card-body">
							<h2 className="card-title">
								{item.title}
							</h2>
							<p>
								{item.number}{" "}
								phần thi
							</p>
							<div className="card-actions justify-end">
								<button className="btn btn-ghost bg-purple-700 text-white hover:text-purple-700 hover:bg-white hover:border-purple-700 border-2">
									Chi tiết
								</button>
								<button className="btn btn-ghost bg-white text-purple-700 border-2 border-purple-700 hover:bg-purple-700 hover:text-white">
									<IconBookmark />
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
