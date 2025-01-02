import React from "react";
import ListeningTest from "../components/Exams/Tests/ListeningTest";
import { TestWrapper } from "../components/context/test.context";
import { useParams } from "react-router-dom";

export default function ListeningPage() {
	const { lessonId } = useParams();
	return (
		<TestWrapper>
			<ListeningTest lessonId={lessonId} />
		</TestWrapper>
	);
}
