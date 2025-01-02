import React from "react";
import Result from "../components/Exams/Tests/Result";
import { useParams } from "react-router-dom";

export default function ResultPage() {
	const { examId } = useParams();
	return <Result examId={examId} />;
}
