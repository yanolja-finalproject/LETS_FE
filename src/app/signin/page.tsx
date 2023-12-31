import { Metadata } from "next";
import SigninForm from "./_component/SigninForm";

export const metadata: Metadata = {
  title: "Let's - 로그인",
};

const Signin = () => {
  return (
    <section>
      <h1>로그인 페이지</h1>
      <SigninForm />
    </section>
  );
};

export default Signin;
