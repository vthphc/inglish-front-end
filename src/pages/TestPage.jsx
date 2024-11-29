import React from "react";
import CompleteTest from "../components/Exams/Tests/CompleteTest";
import { TestWrapper } from "../components/context/test.context";
import { useParams } from "react-router-dom";

export default function TestPage() {
	const { examId } = useParams();
	return (
		<TestWrapper>
			<CompleteTest examId={examId} />
		</TestWrapper>
	);
}
