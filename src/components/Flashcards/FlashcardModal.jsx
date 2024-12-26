import React, { useContext, useEffect, useState } from "react";
import { postFlashcardDataFromDictionaryApi } from "../../api/flashcards/flashcards";
import { AuthContext } from "../context/auth.context";

export default function FlashcardModal(props) {
    const [topic, setTopic] = useState("");
    const { auth } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page refresh
        console.log(topic); // Logs the value to the console
    };

    const handleGenerateFlashcard = async () => {
        if (topic === "") {
            alert("Please enter a topic!");
            return;
        }
        props.setLoading(true);
        const res = await postFlashcardDataFromDictionaryApi(
            topic,
            auth.user.userId
        );

        if (res.message === "Word not found") {
            alert("Failed to create flashcard. Please try again.");
            props.setLoading(false);
			window.location.reload();
            return;
        } else {
            props.setFlashcards([res, ...props.flashcards]);
            setTopic("");
            props.setLoading(false);
        }
    };

    return (
        <div className="">
            <button
                onClick={() =>
                    document.getElementById("flashcard_modal").showModal()
                }
                className="btn btn-circle bg-base-100 shadow-xl m-4 border-2 border-purple-100 hover:bg-gray-200 hover:text-purple-700 group hover:border-transparent"
            >
                <p className="m-auto group-hover:scale-95 transition-all">
                    <span className="text-3xl text-center block m-auto">+</span>
                </p>
            </button>
            <dialog id="flashcard_modal" className="modal">
                <form
                    onSubmit={handleGenerateFlashcard}
                    className="modal-box"
                    id="flashcard_modal_form"
                >
                    <h3 className="font-bold text-lg">
                        Hãy điền vào topic bạn muốn tạo từ:
                    </h3>
                    <input
                        required
                        type="text"
                        placeholder="Điền vào đây"
                        className="input input-ghost w-full max-w-xs my-4 "
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)} // Updates state
                    />
                    <p className="py-4">
                        Bấm <span className="font-bold">ESC</span> hoặc ra ngoài
                        hộp thoại để thoát.
                    </p>
                    <div className="flex flex-row-reverse mr-4">
                        <button
                            type="submit"
                            form="flashcard_modal_form"
                            className="btn btn-ghost bg-purple-700 text-white hover:text-purple-700 hover:bg-white hover:border-purple-700 border-2"
                        >
                            Tạo
                        </button>
                    </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
}
