"use client";

import useInput from "@/hooks/useInput";
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

  const emailInput = useInput("");
  const passwordInput = useInput("");

  const openTermsForm = () => {
    setTermsForm(true);
  };

  return (
    <form
      className="flex flex-col items-center mt-11  h-[calc(100dvh-48px-44px)]"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <SigninInput
        title="아이디 또는 이메일"
        type="text"
        name="signin-email"
        id="signin-email"
      />
      <SigninInput
        title="비밀번호"
        type="password"
        name="signin-password"
        id="signin-password"
      />

      <div className="w-[90%] grow flex items-end">
        <button
          type="button"
          className="w-full h-[56px] disabled:bg-grey-3 hover:bg-[#bb1e4a] bg-pink disabled:text-grey-4 text-white font-bold rounded-xl"
          disabled={emailInput.value === "" || passwordInput.value === ""}
        >
          로그인
        </button>
      </div>
      <div className="flex mb-20 mt-2 items-center text-[13px] text-black-4 font-[400]">
        <button
          type="button"
          className="p-[8px] ml-[8px] cursor-pointer"
          onClick={() => {
            router.push("/signin");
          }}
        >
          비밀번호 재설정
        </button>
        <span className="w-[1px] h-[22px] bg-grey-3 m-[8px]" />
        <button
          type="button"
          className="p-[8px] mr-[8px] cursor-pointer"
          onClick={openTermsForm}
        >
          이메일로 회원가입
        </button>
      </div>
      {termsForm && portalElement
        ? createPortal(<TermsForm setTermsForm={setTermsForm} />, portalElement)
        : null}
    </form>
  );
};

export default EmailSigninForm;
