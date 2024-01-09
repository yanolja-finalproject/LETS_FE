import Button from "@/app/_component/common/atom/Button";
import SigninInput from "@/app/(non-navbar)/email-signin/_component/SigninInput";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const EnterPassword = ({ setStep }: Props) => {
  const handleNextStep = () => {
    setStep(4);
  };

  return (
    <div className="flex flex-col items-center pt-11 h-full px-6">
      <SigninInput
        id="password"
        name="password"
        title="비밀번호 (영문+숫자+특수문자 8~20자리)"
        type="password"
      />
      <SigninInput
        id="verify-password"
        name="verify-password"
        title="비밀번호 확인"
        type="password"
      />
      <div className="flex flex-col justify-end w-full grow mb-3">
        <div className="mt-6">
          <Button text="다음" theme="wide" onClickFn={handleNextStep} />
        </div>
      </div>
    </div>
  );
};

export default EnterPassword;
