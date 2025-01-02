import React from "react";

export default function FlashcardGenerate() {
    const [flashcard, setFlashcard] = React.useState();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
                    Flashcard Generator
                </h1>
                <div className="space-y-4">
                    <div>
                        <label
                            htmlFor="topic"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Topic
                        </label>
                        <input
                            id="topic"
                            type="text"
                            placeholder="Enter topic"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                        onClick={() => alert("Generating flashcard...")}
                    >
                        Generate
                    </button>
                </div>
            </div>
        </div>
    );
}
