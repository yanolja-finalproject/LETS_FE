import { Metadata } from "next";
import SigninHeader from "../signin/_component/SigninHeader";
import EmailSigninForm from "./_component/EmailSigninForm";

export const metadata: Metadata = {
  title: "Let's - 이메일 로그인",
};

const EmailSigninPage = () => {
  return (
    <div className="w-full">
      <SigninHeader text="이메일로 로그인" redirectUrl="/signin" />
      <div className="flex flex-col">
        <EmailSigninForm />
      </div>
    </div>
  );
};

export default EmailSigninPage;
