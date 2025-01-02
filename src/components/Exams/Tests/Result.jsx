import React, { useState, useEffect, useContext } from "react";
import CircleCrossIcon from "../../../assets/icons/CircleCrossIcon";
import CheckCircleIcon from "../../../assets/icons/CheckCircleIcon";
import { AuthContext } from "../../context/auth.context";
import { getExamHistoryById } from "../../../api/users/userTakenExams";
import { Link } from "react-router-dom";

export default function Result(props) {
	const { auth } = useContext(AuthContext);
	const [loading, setLoading] = useState(true);
	const [rightAnswers, setRightAnswers] = useState(0);
	const [wrongAnswers, setWrongAnswers] = useState(0);
	const [data, setData] = useState();
	useEffect(() => {
		const fetchExamDetails = async () => {
			const res = await getExamHistoryById(
				auth.user.userId,
				props.examId
			);
			setData(res);
			const [right, total] = res.score.split("/");
			setRightAnswers(Number(right));
			setWrongAnswers(Number(total - right));
			setLoading(false);
		};
		fetchExamDetails();
	}, []);
	return (
		<>
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
				<div className="sm:mx-24 md:mx-32 lg:mx-40 xl:mx-60 flex flex-col border-2 border-gray-200 rounded-lg py-4 px-8">
					<h1 className="text-3xl font-bold  mb-4">
						Kết quả bài làm: {data.title}
					</h1>
					<div className="grid grid-cols-3 gap-4 sm:gap-8">
						<div className="p-4 rounded-lg border-2 border-gray-200 text-sm sm:text-base md:text-xl flex flex-col justify-center ">
							<span>
								Kết quả làm bài:{" "}
								<span className="font-bold">
									{
										data.score
									}
								</span>
							</span>
							<span>
								Độ chính xác
								(đúng/tổng):{" "}
								<span className="font-bold">
									{(rightAnswers /
										(rightAnswers +
											wrongAnswers)) *
										100}
									%
								</span>
							</span>
						</div>
						<div className="p-4 rounded-lg border-2 border-gray-200 text-center font-bold text-lg sm:text-2xl md:text-3xl text-green-500">
							<p className="flex flex-col items-center gap-2">
								<CheckCircleIcon />
								Trả lời đúng
								<span className="font-bold">
									{
										rightAnswers
									}
								</span>
							</p>
						</div>
						<div className="p-4 rounded-lg border-2 border-gray-200 text-center font-bold text-lg sm:text-2xl md:text-3xl text-red-500">
							<p className="flex flex-col items-center gap-2">
								<CircleCrossIcon />
								Trả lời sai
								<span className="font-bold">
									{
										wrongAnswers
									}
								</span>
							</p>
						</div>
					</div>
					<button className="btn btn-ghost bg-purple-700 text-white hover:text-purple-700 hover:bg-white hover:border-purple-700 border-2 w-fit place-self-end my-8">
						<Link
							to={`/history/${data.examId}`}>
							Đáp án chi tiết
						</Link>
					</button>
				</div>
			)}
		</>
	);
}
