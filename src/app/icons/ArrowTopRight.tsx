import React from "react";
import styled from "styled-components";
export const ArrowTopRight = styled.i`
	& {
		box-sizing: border-box;
		position: relative;
		display: block;
		width: 8px;
		height: 8px;
		border-top: 2px solid;
		transform: scale(var(--ggs, 1));
		border-right: 2px solid;
	}
	&::after {
		content: "";
		display: block;
		box-sizing: border-box;
		position: absolute;
		width: 14px;
		height: 2px;
		background: currentColor;
		transform: rotate(-45deg);
		top: 3px;
		right: -3px;
	}
`;
export const ArrowTopRightComponent = React.forwardRef<
	HTMLElement,
	React.HTMLAttributes<HTMLElement>
>((props, ref) => {
	return (
		<>
			<ArrowTopRight {...props} ref={ref} icon-role="arrow-top-right" />
		</>
	);
});
