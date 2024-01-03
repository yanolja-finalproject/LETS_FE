import Link from "next/link";

interface Props {
  text: string;
  subText?: string;
  redirectUrl?: string;
  theme?: string;
}

const DefaultHeader = ({
  text,
  subText = "",
  redirectUrl,
  theme = "default",
}: Props) => {
  return (
    <div className="flex relative h-[48px]">
      {redirectUrl && (
        <Link
          href={redirectUrl}
          className="absolute left-[32px] top-1/2 -translate-y-1/2"
        >
          <img src="./icons/leftArrowIcon.svg" alt="왼쪽 화살표" width="24px" />
        </Link>
      )}

      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-[18px] text-black-2 font-semibold">
        {theme === "default" && (
          <>
            <span>{text}</span>
            <span className="font-thin">{subText}</span>
          </>
        )}
        {theme === "main" && (
          <img src="./icons/mainTitle.svg" alt="메인 로고" width={75} />
        )}
      </div>
    </div>
  );
};

export default DefaultHeader;
