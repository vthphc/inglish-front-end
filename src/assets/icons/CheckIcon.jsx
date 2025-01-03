import React from "react";

export default function CheckIcon(props) {
	return (
		<svg
			viewBox="0 0 16 16"
			fill={props.fill}
			height="1em"
			width="1em"
			{...props}>
			<path
				fill={props.fill}
				d="M13.5 2L6 9.5 2.5 6 0 8.5l6 6 10-10z"
			/>
		</svg>
	);
}
