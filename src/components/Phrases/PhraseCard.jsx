import React, { useState } from "react";
import PhraseDetails from "./PhraseDetails";
import TrashCanIcon from "../../assets/icons/TrashCanIcon";
import ConfirmationModal from "../CustomModals/ConfirmationModal";
import { deletePhraseApi } from "../../api/phrases/phrases";

export default function PhraseCard({ phrase }) {
    const [isPhraseDetailsOpen, setIsPhraseDetailsOpen] = useState(false);

    const handleOpenDetails = () => {
        setIsPhraseDetailsOpen(true);
    };

    const handleCloseDetails = () => {
        setIsPhraseDetailsOpen(false);
    };

    const handleDelete = async (id) => {
        const res = await deletePhraseApi(id);
        if (res) {
            alert("Phrase deleted successfully!");
			setIsPhraseDetailsOpen(false);
        } else {
            alert("Failed to delete the phrase. Please try again.");
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 border-2 border-purple-100 hover:shadow-lg transition-shadow duration-300">
            {/* Topic Section */}
            <div className="flex flex-row justify-between">
                <h2 className="text-lg text-gray-800 mb-2 truncate">
                    <span>Topic: </span>
                    <span className="font-semibold italic">
                        {phrase.topic.charAt(0).toUpperCase() +
                            phrase.topic.slice(1)}
                    </span>
                </h2>
                <div
                    onClick={() =>
                        document.getElementById("confirmModal").showModal()
                    }
                    className="btn btn-circle text-purple-700 duration-300 transform hover:scale-110 cursor-pointer bg-transparent border-1 border-gray-300"
                >
                    <TrashCanIcon />
                </div>
                <ConfirmationModal
                    id="confirmModal"
                    onConfirm={() => {
                        handleDelete(phrase._id);
                    }}
                />
            </div>

            {/* Created At Section */}
            <p className="text-sm text-gray-500">
                <span className="font-semibold italic">
                    {new Date(phrase.createdAt).toLocaleString()}
                </span>
            </p>
            <div className="card-actions justify-end">
                <button
                    onClick={handleOpenDetails}
                    className="text-sm px-2 btn btn-ghost bg-purple-700 text-white hover:text-purple-700 hover:bg-white hover:border-purple-700 border-2"
                >
                    Details
                </button>
            </div>

            {/* Phrase Details */}
            {isPhraseDetailsOpen && (
                <PhraseDetails
                    phrase={phrase}
                    onClose={handleCloseDetails}
                />
            )}
        </div>
    );
}