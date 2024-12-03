import React, { useEffect, useState } from "react";
import { getExamsApi } from "../../api/exams/exams";
import ExamCard from "./ExamCard";
import IconBookmark from "../../assets/icons/IconBookmark";

export default function Exams() {
    const [exams, setExams] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchExams = async () => {
            try {
                const res = await getExamsApi();
                if (res) {
                    setExams(res);
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchExams();
    }, []); //Lấy data từ api
    const examsJsonHandler = () => {
        console.log(exams);
    };
    const countParts = (array) => {
        return array.length;
    };
    return (
        <div>
            {loading === true ? (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%",
                    }}
                >
                    <span className="loading loading-spinner loading-lg text-purple-700"></span>
                </div>
            ) : (
                <>
                    {/* sm:mx-24 md:mx-40 lg:mx-80 flex flex-col
					sm:grid md:grid-cols-2 xl:grid-cols-2
					2xl:grid-cols-4 */}
                    <div className="sm:mx-24 md:mx-40 lg:mx-80 flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 ">
                        {exams.map((item, index) => {
                            return (
                                <ExamCard
                                    key={index}
                                    title={item.title}
                                    number={countParts(item.content)}
                                    id={item._id}
                                />
                            );
                        })}
                    </div>
                    {/* <button
						onClick={examsJsonHandler}
						className="btn btn-ghost bg-white text-purple-700 border-2 border-purple-700 hover:bg-purple-700 hover:text-white"
					>
						console.log(exams)
					</button> */}
                </>
            )}
        </div>
    );
}
