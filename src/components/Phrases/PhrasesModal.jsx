import React, { useContext, useEffect, useState } from "react";
import {
    getPhraseContextSuggestionsApi,
    getPhraseWithContextAndTopicApi,
	sendTopicApi,
} from "../../api/phrases/topic";
import { AuthContext } from "../context/auth.context";
import { s } from "motion/react-client";

export default function PhrasesModal(props) {
    const [topic, setTopic] = useState("");
    const { auth } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page refresh
        console.log(topic); // Logs the value to the console
    };

    const [suggestions, setSuggestions] = useState([]);
    const [selectedSuggestion, setSelectedSuggestion] = useState("");

    const handleSuggestionsClicked = async () => {
        if (topic === "") {
            alert("Please enter a topic!");
            return;
        } else {
            const res = await getPhraseContextSuggestionsApi(topic);
            setSuggestions(res.cleanContexts);
        }
    };

    const fetchPhraseWithContextAndTopic = async () => {
        if (topic === "") {
            alert("Please enter a topic!");
            return;
        }

        if (selectedSuggestion === "") {
            try {
                props.setLoading(true);
                const res = await sendTopicApi(
                    auth.user.userId,
                    topic,
                );
                props.setPhrases([res, ...props.phrases]);
                setTopic("");
                props.setLoading(false);
            } catch (error) {
                console.error("Error fetching phrase:", error);
            }
        } else {
            try {
                props.setLoading(true);
                const res = await getPhraseWithContextAndTopicApi(
                    auth.user.userId,
                    topic,
                    selectedSuggestion
                );
                props.setPhrases([res, ...props.phrases]);
                setTopic("");
                props.setLoading(false);
            } catch (error) {
                console.error("Error fetching phrase:", error);
            }
        }
    };

    return (
        <div className="">
            <button
                onClick={() =>
                    document.getElementById("phrases_modal").showModal()
                }
                className="btn btn-circle bg-base-100 shadow-xl m-4 border-2 border-purple-100 hover:bg-gray-200 hover:text-purple-700 group hover:border-transparent"
            >
                <p className="m-auto group-hover:scale-95 transition-all">
                    <span className="text-3xl text-center block m-auto">+</span>
                </p>
            </button>
            <dialog id="phrases_modal" className="modal">
                <div className="modal-box" id="phrases_modal_div">
                    <h3 className="font-bold text-lg">
                        Hãy điền vào topic bạn muốn tạo mẫu câu:
                    </h3>
                    <div className="flex flex-row items-center justify-between">
                        <input
                            required
                            type="text"
                            placeholder="Điền vào đây"
                            className="input input-ghost w-full max-w-xs my-4 "
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)} // Updates state
                        />
                        <div className="flex flex-row-reverse">
                            <button
                                div="phrases_modal_div"
                                onClick={handleSuggestionsClicked}
                                className="btn btn-ghost bg-purple-700 text-white hover:text-purple-700 hover:bg-white hover:border-purple-700 border-2"
                            >
                                Gợi ý
                            </button>
                        </div>
                    </div>
                    <div>
                        {suggestions.length > 0 ? (
                            <div>
                                <h3 className="font-bold text-lg">
                                    Ngữ cảnh có thể sử dụng:
                                </h3>
                                <ul className="space-y-2">
                                    {suggestions.map((suggestion, index) => (
                                        <div
                                            onClick={() =>
                                                setSelectedSuggestion(
                                                    suggestion
                                                )
                                            }
                                            className={`
												p-2 text-gray-800 cursor-pointer shadow-md  rounded-lg ${
                                                    selectedSuggestion ===
                                                    suggestion
                                                        ? "bg-purple-700 text-white"
                                                        : "hover:bg-gray-100"
                                                }
												`}
                                            key={index}
                                        >
                                            {suggestion}
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                    </div>
                    <p className="py-4">
                        Bấm <span className="font-bold">ESC</span> hoặc ra ngoài
                        hộp thoại để thoát.
                    </p>
                    <div className="flex flex-row-reverse">
                        <button
                            div="phrases_modal_div"
                            onClick={fetchPhraseWithContextAndTopic}
                            className="btn btn-ghost bg-purple-700 text-white hover:text-purple-700 hover:bg-white hover:border-purple-700 border-2"
                        >
                            Tạo mẫu câu
                        </button>
                    </div>
                </div>
                <div method="dialog" className="modal-backdrop">
                    <button>close</button>
                </div>
            </dialog>
        </div>
    );
}
