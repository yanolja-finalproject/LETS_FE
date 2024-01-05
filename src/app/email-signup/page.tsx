"use client";

import { useState } from "react";
import DefaultHeader from "../_component/common/DefaultHeader";
import SignupStepOne from "./_component/SignupStepOne";

const EmailSignupPage = () => {
  const [step] = useState(1);

  return (
    <section>
      <DefaultHeader
        text="회원가입 "
        subText={`(${step}/2)`}
        redirectUrl="/email-signin"
      />
      <SignupStepOne />
    </section>
  );
};

export default EmailSignupPage;
