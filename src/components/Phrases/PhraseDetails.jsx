import React, { useState, useRef } from "react";
import { ReactTyped } from "react-typed";

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

export default function PhraseDetails({ phrase, runTyped }) {
	const openModal = () => {
		document.getElementById(phrase._id).showModal();
	};

	const closeModal = () => {
		document.getElementById(phrase._id).close();
	};
	// const [typed, setTyped] = useState();
	const refs = useRef([]);

	if (runTyped) {
		refs.current.forEach((ref) => {
			ref.start();
		});
	}

	return (
		<dialog id={phrase._id} className="modal">
			<div className="modal-box">
				<button
					onClick={closeModal}
					className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
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
					<span className="font-bold text-2xl">
						Dialogues:
					</span>
					<br />
					{phrase.dialogues.map(
						(dialogue, index) => (
							<div
								key={index}
								className="w-full flex-col">
								<p
									className={`font-bold underline ${
										dialogue.speaker ===
										"Person A"
											? "flex flex-row-reverse"
											: "flex"
									}`}>
									{
										dialogue.speaker
									}
									:
								</p>
								<p
									className={`mb-4 ${
										dialogue.speaker ===
										"Person A"
											? "text-right"
											: "text-left"
									}`}>
									<ReactTyped
										typedRef={(
											el
										) =>
											(refs.current[
												index
											] =
												el)
										}
										stopped
										strings={[
											dialogue.line,
										]}
										typeSpeed={
											20
										}
									/>
									{/* {
										dialogue.line
									} */}
								</p>
							</div>
						)
					)}
				</p>
			</div>
		</dialog>
	);
}
