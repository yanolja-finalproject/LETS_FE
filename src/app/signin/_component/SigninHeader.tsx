import Link from "next/link";

interface Props {
  text: string;
  subText?: string;
  redirectUrl: string;
}

const SigninHeader = ({ text, subText, redirectUrl }: Props) => {
  return (
    <div className="flex relative h-[48px]">
      <Link
        href={redirectUrl}
        className="absolute left-[32px] top-1/2 -translate-y-1/2"
      >
        <img src="./icons/leftArrowIcon.svg" alt="왼쪽 화살표" width="24px" />
      </Link>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-[18px] text-black-2 font-semibold">
        <span>{text}</span>
        <span className="font-thin">{subText}</span>
      </div>
    </div>
  );
};

SigninHeader.defaultProps = {
  subText: "",
};

export default SigninHeader;
