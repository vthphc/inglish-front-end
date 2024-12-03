import React, { useState, useEffect, useContext } from "react";
import FlashcardCard from "./FlashcardCard";
import {
	getFlashcardsByUserApi,
	postFlashcardApi,
} from "../../api/flashcards/flashcards";
import { AuthContext } from "../context/auth.context";
import QuestionMark from "../../assets/icons/QuestionMark";
import FlashcardModal from "./FlashcardModal";

export default function Flashcards() {
	const [flashcards, setFlashcards] = useState([]);
	const { auth } = useContext(AuthContext);
	useEffect(() => {
		const fetchFlashcards = async () => {
			const res = await getFlashcardsByUserApi(
				auth.user.userId
			);
			setFlashcards(res);
			console.log("Flashcards: ", res);
		};
		fetchFlashcards();
	}, []);

	return (
		<div className="relative">
			<div className="flex flex-col absolute top-0 right-0 z-50">
				<button
					onClick={() =>
						document
							.getElementById(
								"my_modal_2"
							)
							.showModal()
					}
					className="m-auto btn btn-circle border-2 border-purple-100 bg-white hover:bg-gray-200 hover:border-transparent hover:text-purple-700"
				>
					<QuestionMark />
				</button>
				<FlashcardModal />
			</div>
			<dialog id="my_modal_2" className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">
						Hướng dẫn sử dụng
					</h3>
					<p className="py-4">
						Trong đây, các bạn có thể tạo
						một flashcard mới, các từ sẽ
						được{" "}
						<span className="font-bold">
							AI{" "}
						</span>
						tạo ra từ topic mà bạn nhập vào.
						<br />
						<br />
						Chỉ cần bấm nút "+" và điền
						topic mà các bạn muốn{" "}
						<span className="font-bold">
							AI{" "}
						</span>{" "}
						tạo từ cho bạn.
					</p>
				</div>
				<form
					method="dialog"
					className="modal-backdrop"
				>
					<button>close</button>
				</form>
			</dialog>
			<div className="sm:mx-24 md:mx-40 lg:mx-80 flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 ">
				{flashcards.map((item, index) => {
					return (
						<FlashcardCard
							key={index}
							title={item.topic}
							word={item.word}
							id={item._id}
						/>
					);
				})}
			</div>
		</div>
	);
}
