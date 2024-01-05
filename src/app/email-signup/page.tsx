"use client";

import { useState } from "react";
import DefaultHeader from "../_component/common/DefaultHeader";
import SignupComplete from "./_component/SignupComplete";
import SignupStepOne from "./_component/SignupStepOne";
import SignupStepTwo from "./_component/SignupStepTwo";

const EmailSignupPage = () => {
  const [step, setStep] = useState(1);

  if (step === 3) {
    return <SignupComplete />;
  }

  return (
    <section>
      <DefaultHeader
        text="회원가입 "
        subText={`(${step}/2)`}
        redirectUrl="/email-signin"
      />
      {step === 1 && <SignupStepOne setStep={setStep} />}
      {step === 2 && <SignupStepTwo setStep={setStep} />}
    </section>
  );
};

export default EmailSignupPage;
