import * as React from "react";

function RectangleIcon(props) {
	return (
		<svg
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			viewBox="0 0 24 24"
			height="2em"
			width="1em"
			{...props}
		>
			<path d="M8 2 H16 A2 2 0 0 1 18 4 V20 A2 2 0 0 1 16 22 H8 A2 2 0 0 1 6 20 V4 A2 2 0 0 1 8 2 z" />
		</svg>
	);
}

export default RectangleIcon;
