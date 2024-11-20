import React from "react";

export default function BadgeType(props) {
	if (props.type === "listening") {
		return (
			<div className="badge badge-ghost font-bold text-blue-700 bg-blue-100 mx-4">
				Listening
			</div>
		);
	}

	if (props.type === "reading") {
		return (
			<div className="badge badge-ghost font-bold text-green-700 bg-green-100 mx-4">
				Reading
			</div>
		);
	}
}
