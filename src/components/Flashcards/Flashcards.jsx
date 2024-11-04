import React from "react";

export default function Flashcards() {
	const flashcardsData = [
		{ title: "Card 1", number: 1 },
		{ title: "Card 2", number: 2 },
		{ title: "Card 3", number: 3 },
	];
	return (
		<div>
			{flashcardsData.map((item, index) => {
				return (
					<div
						key={item.index}
						className="card bg-base-100 w-96 shadow-xl"
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
								<button className="btn btn-primary">
									Chi tiết
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
