import Button from "@/app/_component/common/atom/Button";
import SigninInput from "@/app/(non-navbar)/email-signin/_component/SigninInput";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const EnterName = ({ setStep }: Props) => {
  const handleNextStep = () => {
    setStep(3);
  };

  return (
    <div className="flex flex-col items-center pt-11 h-full px-6">
      <SigninInput id="name" name="name" title="이름" type="text" />
      <div className="flex flex-col justify-end w-full grow mb-3">
        <div className="mt-6">
          <Button text="다음" theme="wide" onClickFn={handleNextStep} />
        </div>
      </div>
    </div>
  );
};

export default EnterName;
