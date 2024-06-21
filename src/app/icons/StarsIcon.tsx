import React from "react";

const StarsIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			width="36"
			height="36"
			viewBox="0 0 36 36"
			fill="none"
			className={className}
			xmlns="http://www.w3.org/2000/svg">
			<mask
				id="mask0_252_638"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="36"
				height="36">
				<rect width="36" height="36" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_252_638)">
				<path
					d="M25.05 23.25L30.75 18.375L35.25 18.75L28.65 24.4875L30.6 33L26.775 30.675L25.05 23.25ZM21.525 12.3L19.95 8.625L21.675 4.5L25.125 12.6375L21.525 12.3ZM11.025 26.7375L15.75 23.8875L20.475 26.775L19.2375 21.375L23.4 17.775L17.925 17.2875L15.75 12.1875L13.575 17.25L8.1 17.7375L12.2625 21.375L11.025 26.7375ZM6.4875 33L8.925 22.4625L0.75 15.375L11.55 14.4375L15.75 4.5L19.95 14.4375L30.75 15.375L22.575 22.4625L25.0125 33L15.75 27.4125L6.4875 33Z"
					fill="#FFF8EE"
				/>
			</g>
		</svg>
	);
};

export default StarsIcon;
