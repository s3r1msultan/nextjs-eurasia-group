import { useEffect, useRef, useCallback } from "react";
import { IUseOnClickOutside } from "../constants/interfaces";

const useOnClickOutside = ({ onClickOutside }: IUseOnClickOutside) => {
  const ref = useRef<HTMLDivElement>(null);

  const memoizedOnClickOutside = useCallback(onClickOutside, [onClickOutside]);

  useEffect(() => {
    const handleOnClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        memoizedOnClickOutside();
      }
    };

    document.addEventListener("mouseup", handleOnClickOutside);
    document.addEventListener("touchend", handleOnClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleOnClickOutside);
      document.removeEventListener("touchend", handleOnClickOutside);
    };
  }, [memoizedOnClickOutside]);

  return ref;
};

export default useOnClickOutside;
