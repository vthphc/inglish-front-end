import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { sendTopicApi } from "../../api/phrases/topic";

export default function PhrasesModal(props) {
	const [topic, setTopic] = useState("");
	const { auth } = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault(); // Prevents page refresh
		console.log(topic); // Logs the value to the console
	};

	const handleGeneratePhrases = async () => {
		if (topic === "") {
			alert("Please enter a topic!");
			return;
		}
		props.setLoading(true);
		const res = await sendTopicApi(auth.user.userId, topic);
		props.setPhrases([res, ...props.phrases]);
		setTopic("");
		props.setLoading(false);
	};

	return (
		<div className="">
			<button
				onClick={() =>
					document
						.getElementById("phrases_modal")
						.showModal()
				}
				className="btn btn-circle bg-base-100 shadow-xl m-4 border-2 border-purple-100 hover:bg-gray-200 hover:text-purple-700 group hover:border-transparent">
				<p className="m-auto group-hover:scale-95 transition-all">
					<span className="text-3xl text-center block m-auto">
						+
					</span>
				</p>
			</button>
			<dialog id="phrases_modal" className="modal">
				<form
					onSubmit={handleGeneratePhrases}
					className="modal-box"
					id="phrases_modal_form">
					<h3 className="font-bold text-lg">
						Hãy điền vào topic bạn muốn tạo
						mẫu câu:
					</h3>
					<input
						required
						type="text"
						placeholder="Điền vào đây"
						className="input input-ghost w-full max-w-xs my-4 "
						value={topic}
						onChange={(e) =>
							setTopic(e.target.value)
						} // Updates state
					/>
					<p className="py-4">
						Bấm{" "}
						<span className="font-bold">
							ESC
						</span>{" "}
						hoặc ra ngoài hộp thoại để
						thoát.
					</p>
					<div className="flex flex-row-reverse mr-4">
						<button
							type="submit"
							form="phrases_modal_form"
							className="btn btn-ghost bg-purple-700 text-white hover:text-purple-700 hover:bg-white hover:border-purple-700 border-2">
							Tạo
						</button>
					</div>
				</form>
				<form
					method="dialog"
					className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</div>
	);
}
