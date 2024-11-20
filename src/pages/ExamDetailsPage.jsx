import React from "react";
import ExamDetails from "../components/Exams/ExamDetails";
import { useParams } from "react-router-dom";

export default function ExamDetailsPage() {
	const params = useParams();
    const examId = params.examId;
	return <ExamDetails examId={examId} />;
}
