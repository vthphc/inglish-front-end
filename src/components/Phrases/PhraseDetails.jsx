import React from "react";

// this is the phrase schema in the backend
// {
//   userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//   },
//   topic: String,
//   dialogues: [
//       {
//           speaker: String,
//           line: String,
//           _id: false,
//       },
//   ],
//   createdAt: Date,
// },

export default function PhraseDetails({ phrase }) {
    const openModal = () => {
        document.getElementById(phrase._id).showModal();
    };

    const closeModal = () => {
        document.getElementById(phrase._id).close();
    };

    return (
        <dialog id={phrase._id} className="modal">
            <div className="modal-box">
                <button
                    onClick={closeModal}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </button>
                <h3 className="font-bold text-lg">Topic:</h3>
                <div className=" my-4 w-full text-right">
                    <p className="text-5xl font-bold tracking-wider">
                        {phrase.topic}
                    </p>
                </div>
                <div className="divider"></div>
                <p className="mb-4">
                    <span className="font-bold text-2xl">Dialogues:</span>
                    <br />
                    {phrase.dialogues.map((dialogue, index) => (
                        <div key={index} className="w-full">
                            <p className="font-bold">{dialogue.speaker}:</p>
                            <p className="mb-4">{dialogue.line}</p>
                        </div>
                    ))}
                </p>
            </div>
        </dialog>
    );
}
