import DefaultHeader from "@/app/_component/common/DefaultHeader";
import React, { ReactNode } from "react";

interface Props {
  text: string;
  backUrl: string;
  children: ReactNode;
}
const MenuSection = ({ text, backUrl, children }: Props) => {
  return (
    <section>
      <DefaultHeader text={text} redirectUrl={backUrl} theme="default" />
      <article className="w-[87.2%] mx-auto mt-8 box-border">
        {children}
      </article>
    </section>
  );
};

export default MenuSection;
