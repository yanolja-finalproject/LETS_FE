import Button from "@/app/_component/Button";
import SigninInput from "@/app/email-signin/_component/SigninInput";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SignupStepTwo = ({ setStep }: Props) => {
  const handleNextStep = () => {
    setStep(3);
  };

  return (
    <div className="flex flex-col items-center mt-11 h-full px-6">
      <SigninInput
        id="email-auth"
        name="email-auth"
        title="비밀번호 (영문+숫자+특수문자 8~20자리)"
        type="email"
      />
      <SigninInput
        id="certification"
        name="certification"
        title="비밀번호 확인"
        type="number"
      />
      <div className="flex flex-col justify-end w-full grow mb-3">
        <div className="mt-6">
          <Button text="다음" theme="wide" onClickFn={handleNextStep} />
        </div>
      </div>
    </div>
  );
};

export default SignupStepTwo;
