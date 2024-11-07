import React from "react";
import FlashcardCard from "./FlashcardCard";

export default function Flashcards() {
	const flashcardsData = [
		{ title: "Card 1", number: 1 },
		{ title: "Card 2", number: 2 },
		{ title: "Card 3", number: 3 },
		{ title: "Card 4", number: 4 },
		{ title: "Card 5", number: 5 },
		{ title: "Card 6", number: 6 },
	];
	return (
		<div className="sm:mx-24 md:mx-40 lg:mx-80 flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 ">
			{flashcardsData.map((item, index) => {
				return (
					<FlashcardCard
						key={index}
						title={item.title}
						number={item.number}
						id={item._id}
					/>
				);
			})}
		</div>
	);
}
