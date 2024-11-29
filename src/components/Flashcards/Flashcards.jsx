import React, { useState, useEffect, useContext } from "react";
import FlashcardCard from "./FlashcardCard";
import {
	getFlashcardsByUserApi,
	postFlashcardApi,
} from "../../api/flashcards/flashcards";
import { AuthContext } from "../context/auth.context";

export default function Flashcards() {
	const [flashcards, setFlashcards] = useState([]);
	const { auth } = useContext(AuthContext);
	useEffect(() => {
		const fetchFlashcards = async () => {
			const res = await getFlashcardsByUserApi(
				auth.user.userId
			);
			setFlashcards(res);
			console.log("Flashcards: ", res);
		};
		fetchFlashcards();
	}, []);

	return (
		<div className="sm:mx-24 md:mx-40 lg:mx-80 flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 ">
			{flashcards.map((item, index) => {
				return (
					<FlashcardCard
						key={index}
						title={item.topic}
						word={item.word}
						id={item._id}
					/>
				);
			})}
		</div>
	);
}
