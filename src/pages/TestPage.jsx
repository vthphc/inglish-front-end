import React from "react";
import CompleteTest from "../components/Exams/Tests/CompleteTest";
import { useParams } from "react-router-dom";

export default function TestPage() {
	const { examId } = useParams();
	return <CompleteTest examId={examId} />;
}
