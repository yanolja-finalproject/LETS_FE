import React from "react";

const ContentsBox = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="pl-6">
      <p className="text-black-2 font-semibold text-[18px]">{title}</p>
      {children}
    </section>
  );
};

export default ContentsBox;
