import React from "react";

const LayersIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			width="36"
			height="36"
			viewBox="0 0 36 36"
			fill="none"
			className={className}
			xmlns="http://www.w3.org/2000/svg">
			<mask
				id="mask0_252_629"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="36"
				height="36">
				<rect width="36" height="36" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_252_629)">
				<path
					d="M18 31.575L4.5 21.075L6.975 19.2L18 27.75L29.025 19.2L31.5 21.075L18 31.575ZM18 24L4.5 13.5L18 3L31.5 13.5L18 24ZM18 20.175L26.625 13.5L18 6.825L9.375 13.5L18 20.175Z"
					fill="#FFF8EE"
				/>
			</g>
		</svg>
	);
};

export default LayersIcon;
