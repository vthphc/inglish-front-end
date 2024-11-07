import React from "react";
import { Link } from "react-router-dom";

export default function FlashcardCard(props) {
	return (
		<div className="card bg-base-100 w-auto shadow-xl m-4 border-2 border-purple-100">
			<div className="card-body">
				<h2 className="card-title">{props.title}</h2>
				<p className="text-gray-600">
					{props.number} phần thi
				</p>
				<div className="card-actions justify-end">
					{/* <Link to={`/exams/${props.id}`}> */}
					<button className="text-xs  px-2 btn btn-ghost bg-purple-700 text-white hover:text-purple-700 hover:bg-white hover:border-purple-700 border-2">
						Chi tiết
					</button>
					{/* </Link> */}
					<button className="text-xs  px-2 btn btn-ghost bg-white text-purple-700 border-2 border-purple-700 hover:bg-white hover:border-purple-700 hover:text-purple-300">
						Random button
					</button>
				</div>
			</div>
		</div>
	);
}
