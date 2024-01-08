"use client";

import Button from "@/app/_component/common/atom/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SigninInput from "./SigninInput";
import TermsForm from "./TermsForm";

const EmailSigninForm = () => {
  const router = useRouter();

  const [termsForm, setTermsForm] = useState(false);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById("portal"));
  }, [termsForm]);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailInputChange = (inputValue: string) => {
    setEmailValue(inputValue);
  };
  const handlePasswordInputChange = (inputValue: string) => {
    setPasswordValue(inputValue);
  };

  const openTermsForm = () => {
    setTermsForm(true);
  };

  return (
    <form
      className="flex flex-col items-center mt-11 h-[calc(100dvh-48px-44px)] web:px-6"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <SigninInput
        title="아이디 또는 이메일"
        type="text"
        name="signin-email"
        id="signin-email"
        onInputChange={handleEmailInputChange}
      />
      <SigninInput
        title="비밀번호"
        type="password"
        name="signin-password"
        id="signin-password"
        onInputChange={handlePasswordInputChange}
      />

      <div className="w-full grow flex items-end">
        <Button
          text="로그인"
          disabled={emailValue === "" || passwordValue === ""}
          theme="wide"
        />
      </div>
      <div className="flex mb-20 mt-2 items-center text-[13px] text-black-4 font-normal">
        <Button
          text="비밀번호 재설정"
          theme="md"
          onClickFn={() => {
            router.push("/signin");
          }}
        />
        <span className="w-[1px] h-[22px] bg-grey-3 my-2 mx-4" />
        <Button text="이메일로 회원가입" theme="md" onClickFn={openTermsForm} />
      </div>
      {termsForm && portalElement
        ? createPortal(<TermsForm setTermsForm={setTermsForm} />, portalElement)
        : null}
    </form>
  );
};

export default EmailSigninForm;
