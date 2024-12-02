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
        <div>
            <div className="flex flex-row justify-center space-x-4 w-full px-12">
                <input
                    type="text"
                    placeholder="Type in a topic (e.g. Animals, Food, etc.)"
                    className="border-2 border-gray-300 rounded-lg p-2 w-1/2"
                    onChange={(e) => setFlashcardTopic(e.target.value)}
                    value={flashcardTopic}
                />
                <button
                    className="bg-purple-700 px-4 text-white font-semibold py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    onClick={handleGenerateFlashcard}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Generate"}
                </button>
            </div>
            {loading ? (
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
                <div className="sm:mx-24 md:mx-40 lg:mx-80 flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 ">
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
            )}
        </div>
    );
}
