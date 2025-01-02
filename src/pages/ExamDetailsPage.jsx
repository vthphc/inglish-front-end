import React from "react";
import ExamDetails from "../components/Exams/ExamDetails";
import { useParams } from "react-router-dom";

export default function ExamDetailsPage() {
	const { examId } = useParams();
	return <ExamDetails examId={examId} />;
}
