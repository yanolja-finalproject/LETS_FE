import Button from "@/app/_component/common/Button";
import SigninInput from "@/app/email-signin/_component/SigninInput";
import SignupEmailInfo from "./SignupEmailInfo";
import SignupEmailWarning from "./SignupEmailWarning";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SignupStepOne = ({ setStep }: Props) => {
  const handleNextStep = () => {
    setStep(2);
  };

  return (
    <div className="flex flex-col items-center mt-11 h-full px-6">
      <SigninInput
        id="email-auth"
        name="email-auth"
        title="이메일"
        type="email"
        theme="button"
      />
      <div className="w-full -mt-1">
        <SignupEmailWarning />
      </div>
      <div className="flex justify-center w-full mt-9">
        <SigninInput
          id="certification"
          name="certification"
          title="인증번호"
          type="number"
          theme="count"
        />
      </div>
      <div className="flex flex-col justify-end w-full grow mb-3">
        <SignupEmailInfo />
        <div className="mt-6">
          <Button text="다음" theme="wide" onClickFn={handleNextStep} />
        </div>
      </div>
    </div>
  );
};

export default SignupStepOne;
