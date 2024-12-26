import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { getAccountApi } from "../../api/auth/account";
import { useNavigate } from "react-router-dom";
import { getThisMonthFlashcardsbByUserApi } from "../../api/flashcards/flashcards";
import { getThisMonthPhrasesByUserApi } from "../../api/phrases/phrases";

export default function Home() {
    console.log("render Home");
    const [loading, setLoading] = useState(true);
    const { auth } = useContext(AuthContext);

    const [userFlashcardsThisMonth, setUserFlashcardsThisMonth] = useState([]);
    const [userPhrasesThisMonth, setUserPhrasesThisMonth] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const fetchUserFlashcardsThisMonth = async () => {
            try {
                const response = await getThisMonthFlashcardsbByUserApi(
                    auth.user.userId
                );
                setUserFlashcardsThisMonth(response);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchUserPhrasesThisMonth = async () => {
            try {
                const response = await getThisMonthPhrasesByUserApi(
                    auth.user.userId
                );
                setUserPhrasesThisMonth(response);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserPhrasesThisMonth();
        fetchUserFlashcardsThisMonth();
        setLoading(false);
    }, [auth.user.userId]);

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
                <div className="bg-gray-50 -mt-12 min-h-screen">
                    {/* Hero Section */}
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-12 text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                            Chào <span>{auth.user.username}</span>!
                        </h1>
                        <p className="text-lg lg:text-2xl">
                            Hãy khám phá những thành tựu học tập của bạn trong
                            tháng này!
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="container mx-auto px-6 py-8">
                        {/* Flashcards Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl lg:text-3xl font-semibold text-purple-700 mb-4">
                                Flashcards Tháng Này
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Bạn đã tạo được
                                <span className="font-bold text-purple-700">
                                    {" "}
                                    {
                                        userFlashcardsThisMonth.length
                                    } flashcards{" "}
                                </span>
                                cho những chủ đề sau:
                            </p>
                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {userFlashcardsThisMonth.map(
                                    (flashcard, index) => (
                                        <div
                                            key={index}
                                            className="p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-300"
                                        >
                                            <span className="text-purple-700 font-semibold">
                                                {flashcard.topic}
                                            </span>
                                        </div>
                                    )
                                )}
                                <div
                                    onClick={() => navigate("/flashcards")}
                                    className="p-4 bg-white hover:scale-105 cursor-pointer shadow-md rounded-md hover:shadow-lg transition duration-300"
                                >
                                    <span className="text-purple-700 font-semibold">
                                        Đến xem chi tiết
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Phrases Section */}
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-semibold text-purple-700 mb-4">
                                Cuộc Đối Thoại Tháng Này
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Bạn đã có
                                <span className="font-bold text-purple-700">
                                    {" "}
                                    {userPhrasesThisMonth.length} cuộc đối thoại{" "}
                                </span>
                                trong tháng này cho những chủ đề sau:
                            </p>
                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {userPhrasesThisMonth.map((phrase, index) => (
                                    <div
                                        key={index}
                                        className="p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-300"
                                    >
                                        <span className="text-purple-700 font-semibold">
                                            {phrase.topic}
                                        </span>
                                    </div>
                                ))}
                                <div
                                    onClick={() => navigate("/phrases")}
                                    className="p-4 bg-white hover:scale-105 cursor-pointer shadow-md rounded-md hover:shadow-lg transition duration-300"
                                >
                                    <span className="text-purple-700 font-semibold">
                                        Đến xem chi tiết
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
