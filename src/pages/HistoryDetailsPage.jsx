import React from "react";
import HistoryDetails from "../components/Exams/History/HistoryDetails";
import { useParams } from "react-router-dom";

export default function HistoryDetailsPage() {
	const { historyId } = useParams();
	return <HistoryDetails historyId={historyId} />;
}
