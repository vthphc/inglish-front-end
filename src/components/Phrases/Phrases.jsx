import React from "react";
import { getPhrasesApiByUserId } from "../../api/phrases/phrases";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import PhraseCard from "./PhraseCard";
import QuestionMark from "../../assets/icons/QuestionMark";
import PhrasesModal from "./PhrasesModal";
import TutorialModal from "../Flashcards/TutorialModal";

export default function Phrases() {
	const [loading, setLoading] = React.useState(false);
	const { auth } = React.useContext(AuthContext);
	const [phrases, setPhrases] = React.useState([]);

	React.useEffect(() => {
		const fetchPhrases = async () => {
			setLoading(true);
			const res = await getPhrasesApiByUserId(
				auth.user.userId
			);
			setPhrases(res.reverse());
			setLoading(false);
		};
		fetchPhrases();
	}, []);

	return (
		<div>
			{loading === true ? (
				<div
					style={{
						position: "fixed",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}>
					<span className="loading loading-spinner loading-lg text-purple-700"></span>
				</div>
			) : (
				<div className="relative">
					<div className="flex flex-col absolute top-1/4 right-0 z-50">
						<button
							onClick={() =>
								document
									.getElementById(
										"my_modal_2"
									)
									.showModal()
							}
							className="m-auto btn btn-circle border-2 border-purple-100 bg-white hover:bg-gray-200 hover:border-transparent hover:text-purple-700">
							<QuestionMark />
						</button>
						<PhrasesModal
							loading={loading}
							setLoading={setLoading}
							phrases={phrases}
							setPhrases={setPhrases}
						/>
					</div>
					<TutorialModal id="my_modal_2" />
					<div className="mx-16 sm:mx-24 md:mx-40 lg:mx-60 flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-8">
						{phrases.map((phrase) => (
							<PhraseCard
								key={phrase._id}
								phrase={phrase}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
