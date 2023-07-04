import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div>
      <h2>Header about</h2>
      {children}
    </div>
  );
};

export default layout;
