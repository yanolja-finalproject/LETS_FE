"use client";

interface Props {
  emailInput: string;
  passwordInput: string;
}

const SigninButton = ({ emailInput, passwordInput }: Props) => {
  return (
    <button
      type="button"
      className="w-full h-[56px] disabled:bg-grey-3 hover:bg-[#bb1e4a] bg-pink disabled:text-grey-4 text-white font-bold rounded-xl"
      disabled={emailInput === "" || passwordInput === ""}
    >
      로그인
    </button>
  );
};

export default SigninButton;
