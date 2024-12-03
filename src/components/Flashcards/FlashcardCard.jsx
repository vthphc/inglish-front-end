import React from "react";
import { Link } from "react-router-dom";
import FlashcardDetails from "./FlashcardDetails";
import { deleteFlashcardApi } from "../../api/flashcards/flashcards";
import { IconButton } from "@material-tailwind/react";

export default function FlashcardCard(props) {
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to remove this flashcard?"
        );
        if (confirmDelete) {
            const res = await deleteFlashcardApi(id);
            if (res) {
                alert("Flashcard deleted successfully!");
                window.location.reload();
            } else {
                alert("Failed to delete the flashcard. Please try again.");
            }
        }
    };

    return (
        <div className="card bg-base-100 w-auto shadow-xl m-4 border-2 border-purple-100">
            <div className="card-body">
                <div className="flex flex-row justify-between">
                    <h2 className="card-title">{props.word}</h2>
                    <div
                        onClick={() => handleDelete(props.id)}
                        className="text-purple-700 p-2 duration-300 transform hover:scale-110 rounded-lg cursor-pointer"
                    >
                        <img
                            width="30"
                            height="30"
                            src="https://img.icons8.com/fluency-systems-regular/50/filled-trash.png"
                            alt="filled-trash"
                        />
                    </div>
                </div>
                <div className="text-gray-600 space-x-1">
                    <span>Topic:</span>
                    <span className="italic font-bold">{props.title}</span>
                </div>
                <div className="card-actions justify-end">
                    <button
                        onClick={() =>
                            document.getElementById(props.id).showModal()
                        }
                        className="text-sm px-2 btn btn-ghost bg-purple-700 text-white hover:text-purple-700 hover:bg-white hover:border-purple-700 border-2"
                    >
                        Details
                    </button>
                </div>
            </div>
            <FlashcardDetails id={props.id} />
        </div>
    );
}
