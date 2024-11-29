import React, { useState, useEffect } from "react";
import { getFlashcardById } from "../../api/flashcards/flashcards";

export default function FlashcardDetails(props) {
	const [data, setData] = useState();
	useEffect(() => {
		const fetchFlashcard = async () => {
			const res = await getFlashcardById(props.id);
			setData(res);
		};
		fetchFlashcard();
	}, []);
	return (
		<div>
			<dialog id={props.id} className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">
						Topic: {data?.topic}
					</h3>
					<div className=" my-4">
						<p className="text-5xl font-bold tracking-wider">
							{data?.word}
						</p>
						<span className="italic font-bold">
							{data?.category}
						</span>
					</div>
					<div className="divider"></div>
					<p className="mb-4">
						<span className="font-bold text-2xl">
							Definition:
						</span>
						<br />
						{data?.definition}
					</p>
					<p className="">
						<span className="font-bold text-2xl">
							Example:
						</span>{" "}
						<br />
						{data?.example}
					</p>
					{data?.phonetics.map((item, index) => {
						<div key={index}>
							<p>{item.text}</p>
							<p>{item.audio}</p>
						</div>;
					})}
				</div>
				<form
					method="dialog"
					className="modal-backdrop"
				>
					<button>close</button>
				</form>
			</dialog>
		</div>
	);
}
