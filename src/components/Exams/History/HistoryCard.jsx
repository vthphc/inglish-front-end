import React from "react";
import { Link } from "react-router-dom";

export default function HistoryCard({ data }) {
	return (
		<div className="card bg-base-100 w-auto shadow-md m-4 border-2 border-purple-100">
			<div className="card-body">
				<div className="flex flex-col">
					<h2 className="card-title">
						{data.title}
					</h2>
					<div className="text-gray-600 space-x-1">
						<span>Score:</span>
						<span className="italic font-bold">
							{data.score}
						</span>
					</div>
					<div className="card-actions justify-end">
						<Link
							className="text-sm px-2 btn btn-ghost bg-purple-700 text-white hover:text-purple-700 hover:bg-white hover:border-purple-700 border-2"
							to={`/history/${data._id}`}>
							Chi tiết
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
