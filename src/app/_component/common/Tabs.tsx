import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  buttons: ReactNode[];
}
const Tabs = ({ children, buttons }: Props) => {
  return (
    <>
      <ul className="flex items-center justify-start overflow-x-auto">
        {buttons}
      </ul>
      {children}
    </>
  );
};

export default Tabs;
