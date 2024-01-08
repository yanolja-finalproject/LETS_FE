import Button from "@/app/_component/common/atom/Button";
import React from "react";

const ReservationTabContent = () => {
  return (
    <>
      <ul className="flex flex-col gap-2 justify-start items-center w-[95%]  mx-auto my-4 ">
        <li className="w-full relative p-3 flex flex-row gap-2 border border-solid border-black rounded-md">
          <div className=" basis-1/3 rounded-md overflow-hidden">
            <img
              className="w-full h-full"
              src="//source.unsplash.com/100x100?japan"
              alt="예약내역 이미지"
            />
          </div>
          <div className="flex flex-col justify-center px-3 basis-2/3 gap-2">
            <p className="flex flex-row items-center gap-10 ">
              <span className="font-bold text-md ">
                청룡의 해 얼리버드 특가
              </span>
            </p>
            <p className="flex flex-row items-center justify-start gap-1">
              <span className="border border-solid border-grey-4 rounded p-1 text-xs">
                일본
              </span>
              <span className="border border-solid border-grey-4 rounded p-1 text-xs">
                체험/액티비티
              </span>
              <span className="border border-solid border-grey-4 rounded p-1 text-xs">
                쇼핑
              </span>
            </p>
            <Button
              text="리뷰 보러 가기"
              styleClass="rounded text-xs p-2 px-4 mt-4 bg-pink text-white"
            />
          </div>
        </li>
      </ul>
      <Button
        text="더보기"
        styleClass="bg-gray-100 w-full flex justify-center gap-4 z-5  text-center items-center py-2 fixed bottom-[60px]"
        icon="/icons/bottomArrowIcon.svg"
      />
    </>
  );
};

export default ReservationTabContent;
