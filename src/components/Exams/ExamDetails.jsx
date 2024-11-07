import React from "react";
import { useParams } from "react-router-dom";

export default function ExamDetails(props) {
	const params = useParams();
	console.log(params);
	const examId = props.examId;
	return <div>ExamDetails {examId}</div>;
}
