import React, { useState, useEffect, useContext } from "react";
import FlashcardCard from "./FlashcardCard";
import {
    getFlashcardsByUserApi,
    postFlashcardApi,
} from "../../api/flashcards/flashcards";
import { AuthContext } from "../context/auth.context";
import QuestionMark from "../../assets/icons/QuestionMark";
import FlashcardModal from "./FlashcardModal";
import TutorialModal from "./TutorialModal";

export default function Flashcards() {
    const [flashcards, setFlashcards] = useState([]);
    const [flashcardTopic, setFlashcardTopic] = useState("");
    const [loading, setLoading] = useState(false);
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

    // const handleGenerateFlashcard = async () => {
    // 	if (flashcardTopic === "") {
    // 		alert("Please enter a topic!");
    // 		return;
    // 	}
    // 	setLoading(true);
    // 	const res = await postFlashcardApi(
    // 		flashcardTopic,
    // 		auth.user.userId
    // 	);
    // 	setFlashcards([res, ...flashcards]);
    // 	setFlashcardTopic("");
    // 	setLoading(false);
    // };

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
                <div className="relative">
                    <div className="flex flex-col absolute top-0 right-0 z-50">
                        <button
                            onClick={() =>
                                document
                                    .getElementById("my_modal_2")
                                    .showModal()
                            }
                            className="m-auto btn btn-circle border-2 border-purple-100 bg-white hover:bg-gray-200 hover:border-transparent hover:text-purple-700"
                        >
                            <QuestionMark />
                        </button>
                        <FlashcardModal
                            loading={loading}
                            setLoading={setLoading}
                            flashcards={flashcards}
                            setFlashcards={setFlashcards}
                        />
                    </div>
                    <TutorialModal id="my_modal_2" />
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
                </div>
            )}
        </div>
    );
}
