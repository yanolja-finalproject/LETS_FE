import Link from "next/link";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-1/2 translate-x-[-50%] w-full bg-white flex justify-center">
      <div className="border-solid border-black border-2 w-[500px]">
        <Link href="/signin" className="m-2 p-2">
          로그인
        </Link>
        <Link href="/" className="m-2">
          홈
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
