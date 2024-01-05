import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Let's - 로그인",
};

const SigninPage = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center mt-[180px]">
        <img
          src="./assets/mainTitle.svg"
          alt="메인 타이틀"
          width="40%"
          className="mb-4"
        />
        <p>내 손안의 최고 여행 선택!</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
        <Link
          href="/signin"
          className="w-[87%] h-[56px] rounded-lg bg-[#1FBB64] flex justify-center items-center text-white mb-4"
        >
          <img src="./icons/naverLogo.svg" alt="네이버 로고" className="mr-4" />
          <div>네이버 로그인</div>
        </Link>
        <Link
          href="/signin"
          className="w-[87%] h-[56px] rounded-lg bg-yellow flex justify-center items-center mb-8 text-brown"
        >
          <img src="./icons/kakaoLogo.svg" alt="카카오 로고" className="mr-4" />
          <div>카카오 로그인</div>
        </Link>
        <Link href="/email-signin" className="text-black-4">
          이메일로 시작하기 &gt;
        </Link>
      </div>
    </div>
  );
};

export default SigninPage;
