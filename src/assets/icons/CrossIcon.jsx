import React from 'react'

export default function CrossIcon(props) {
	return (
		<svg
			viewBox="0 0 16 16"
			fill={props.fill}
			height="1em"
			width="1em"
			{...props}>
			<path
				fill={props.fill}
				d="M15.854 12.854L11 8l4.854-4.854a.503.503 0 000-.707L13.561.146a.499.499 0 00-.707 0L8 5 3.146.146a.5.5 0 00-.707 0L.146 2.439a.499.499 0 000 .707L5 8 .146 12.854a.5.5 0 000 .707l2.293 2.293a.499.499 0 00.707 0L8 11l4.854 4.854a.5.5 0 00.707 0l2.293-2.293a.499.499 0 000-.707z"
			/>
		</svg>
	);
}
