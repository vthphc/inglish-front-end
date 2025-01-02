import React, { memo } from "react";
import "animate.css";
import "./phrases.css";

function PhraseDetails({ phrase, onClose }) {
    return (
        <dialog id={phrase._id} className="modal" open>
            <div className="modal-box">
                <button
                    onClick={onClose}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </button>
                <h3 className="font-bold text-lg">Topic:</h3>
                <div className="my-4 w-full text-right">
                    <p className="text-5xl font-bold tracking-wider">
                        {phrase.topic}
                    </p>
                </div>
                <div className="divider"></div>
                <p className="mb-4">
                    <p className="font-bold text-2xl">Dialogues: </p>
                    <br />
                    {phrase.dialogues.map((dialogue, index) => (
                        <div key={index} className="mb-4">
                            <div
                                className={`flex ${
                                    dialogue.speaker === "Person A"
                                        ? "justify-end"
                                        : "justify-start"
                                }`}
                            >
                                <div
                                    className={`py-2 px-4 max-w-xs rounded-lg animate__animated ${
                                        dialogue.speaker === "Person A"
                                            ? "bg-purple-700 text-white animate__fadeInLeft"
                                            : "bg-gray-200 text-black animate__fadeInRight"
                                    }`}
                                    style={{
                                        animationDelay: `${index + 1}s`,
                                    }}
                                >
                                    {/* <p className="font-bold">
                                        {dialogue.speaker}:
                                    </p> */}
                                    <p>{dialogue.line}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </p>
            </div>
        </dialog>
    );
}

export default memo(PhraseDetails);
