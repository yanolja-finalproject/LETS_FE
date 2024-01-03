"use client";

import { useState } from "react";
import SigninHeader from "../signin/_component/SigninHeader";

const EmailSignupPage = () => {
  const [step] = useState(1);

  return (
    <section>
      <SigninHeader
        text="회원가입 "
        subText={`(${step}/2)`}
        redirectUrl="/email-signin"
      />
    </section>
  );
};

export default EmailSignupPage;
