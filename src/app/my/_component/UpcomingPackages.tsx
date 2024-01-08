"use client";

import Button from "@/app/_component/common/atom/Button";

const UpcomingPackages = () => {
  return (
    <article className="w-[95%] mx-auto my-4">
      <h2 className="w-full font-bold text-md p-2">
        다가오는 패키지가 있어요!
      </h2>
      <div className="p-3 flex flex-row flex-wrap relative border border-solid border-black rounded-md">
        <div className=" basis-1/5 rounded-md overflow-hidden">
          <img
            className="w-full h-full"
            src="//source.unsplash.com/66x66?osaka"
            alt="다가오는 패키지"
          />
        </div>
        <div className="flex flex-col justify-center px-3 basis-4/5 gap-1">
          <p className="flex flex-row items-center gap-5 ">
            <span className="font-semibold text-md ">오사카 특별 패키지</span>
            <span className="font-semibold text-md text-pink">D - 30</span>
          </p>
          <p className="flex flex-row items-center gap-2 text-grey-4">
            <span>일본</span>
            <span className="text-sm">23.01.01 - 23.01.01</span>
          </p>
          <Button
            text="전체보기"
            theme="md"
            styleClass="absolute bottom-1 right-1 text-xs underline underline-offset-4  text-slate-500 decoration-slate-400"
          />
        </div>
      </div>
    </article>
  );
};

export default UpcomingPackages;
