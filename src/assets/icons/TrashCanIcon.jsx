import React from "react";

export default function TrashCanIcon(props) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="2em"
			width="2em"
			{...props}
		>
			<path d="M6 7H5v13a2 2 0 002 2h10a2 2 0 002-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z" />
		</svg>
	);
}
