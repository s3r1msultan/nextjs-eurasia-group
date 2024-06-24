import React, { FC } from "react";

const Wrapper: FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
