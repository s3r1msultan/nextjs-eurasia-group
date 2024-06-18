import { useEffect } from "react";
import { IUseOnClickOutside } from "../constants/interfaces";

const useOnClickOurside = ({ ref, onClickOutside }: IUseOnClickOutside) => {
	useEffect(() => {
		const handleClickOnOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				onClickOutside();
			}
		};

		document.addEventListener("click", handleClickOnOutside);
		return () => {
			document.removeEventListener("click", handleClickOnOutside);
		};
	}, [ref]);
};

export default useOnClickOurside;
