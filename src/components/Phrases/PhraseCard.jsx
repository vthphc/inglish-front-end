import React from "react";
import PhraseDetails from "./PhraseDetails";

export default function PhraseCard({ phrase }) {
    const [isPhraseDetailsOpen, setIsPhraseDetailsOpen] = React.useState(false);
    const openModal = () => {
        document.getElementById(phrase._id).showModal();
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            {/* Topic Section */}
            <h3 className="text-lg text-gray-800 mb-2 truncate">
                <span>Topic: </span>
                <span className="font-semibold italic">{phrase.topic}</span>
            </h3>

            {/* Created At Section */}
            <p className="text-sm text-gray-500">
                <span className="font-semibold italic">
                    {new Date(phrase.createdAt).toLocaleString()}
                </span>
            </p>
            <div className="card-actions justify-end">
                <button
                    onClick={openModal}
                    className="text-sm px-2 btn btn-ghost bg-purple-700 text-white hover:text-purple-700 hover:bg-white hover:border-purple-700 border-2"
                >
                    Details
                </button>
            </div>
            {isPhraseDetailsOpen && <PhraseDetails phrase={phrase} />}
            <PhraseDetails phrase={phrase} />
        </div>
    );
}
