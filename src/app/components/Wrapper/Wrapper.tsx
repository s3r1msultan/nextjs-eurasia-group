import React, { FC } from "react";
import styles from "./Wrapper.module.scss";

const Wrapper: FC<React.PropsWithChildren> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
