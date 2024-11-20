import React from "react";
import ListeningTest from "../components/Exams/Tests/ListeningTest";
import { useParams } from "react-router-dom";

export default function ListeningPage() {
	const { lessonId } = useParams();
	return <ListeningTest lessonId={lessonId} />;
}
