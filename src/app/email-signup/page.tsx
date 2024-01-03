"use client";

import { useState } from "react";
import DefaultHeader from "../_component/DefaultHeader";

const EmailSignupPage = () => {
  const [step] = useState(1);

  return (
    <section>
      <DefaultHeader
        text="회원가입 "
        subText={`(${step}/2)`}
        redirectUrl="/email-signin"
      />
    </section>
  );
};

export default EmailSignupPage;
