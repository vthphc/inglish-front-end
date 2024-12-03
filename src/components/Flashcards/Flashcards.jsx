import React, { useState, useEffect, useContext } from "react";
import FlashcardCard from "./FlashcardCard";
import {
    getFlashcardsByUserApi,
    postFlashcardApi,
} from "../../api/flashcards/flashcards";
import { AuthContext } from "../context/auth.context";
import QuestionMark from "../../assets/icons/QuestionMark";
import FlashcardModal from "./FlashcardModal";

export default function Flashcards() {
    const [flashcards, setFlashcards] = useState([]);
    const { auth } = useContext(AuthContext);
    console.log("Auth: ", auth.user.userId);

    useEffect(() => {
        const fetchFlashcards = async () => {
            setLoading(true);
            const res = await getFlashcardsByUserApi(auth.user.userId);
            setFlashcards(res.reverse());
            setLoading(false);
        };
        fetchFlashcards();
    }, []);

    const [flashcardTopic, setFlashcardTopic] = useState("");

    const [loading, setLoading] = useState(false);
    const handleGenerateFlashcard = async () => {
        if (flashcardTopic === "") {
            alert("Please enter a topic!");
            return;
        }
        setLoading(true);
        const res = await postFlashcardApi(flashcardTopic, auth.user.userId);
        setFlashcards([res, ...flashcards]);
        setFlashcardTopic("");
        setLoading(false);
    };

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
