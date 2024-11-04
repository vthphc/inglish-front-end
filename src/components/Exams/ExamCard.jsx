import React from "react";
import { Link } from "react-router-dom";

export default function ExamCard(props) {
	return (
		<div className="flex flex-col">
			<p>{props.title}</p>
			<p>{props.number}</p>
			<Link className="btn btn-ghost"></Link>
		</div>
	);
}
