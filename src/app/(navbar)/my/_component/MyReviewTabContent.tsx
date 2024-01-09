"use client";

import Button from "@/app/_component/common/atom/Button";
import renderStars from "@/utils/renderStars";

const averageScore = 3.5;

const MyReviewTabContent = () => {
  return (
    <>
      <ul className="flex flex-col gap-2 justify-start items-center w-[95%]  mx-auto my-4 ">
        <li className="w-full flex flex-col gap-2 border border-black border-solid py-3  px-2 rounded">
          <h2 className="font-bold text-md"> review.content</h2>
          <div className="flex items-center text-xs text-grey-4">
            <div className="flex gap-.5 ">{renderStars(averageScore)}</div>
            <span className="flex gap-2 ml-2">
              <span>({averageScore})</span>
              <span> 2024.01.01</span>
            </span>
          </div>

          <div className="flex p-2 bg-gray-200	gap-2 bg-grey rounded-md text-xs">
            <dl className="flex gap-0.5">
              <dt className="text-black-6">상품구성</dt>
              <dd className="text-pink"> 4</dd>
            </dl>
            <dl className="flex gap-0.5">
              <dt className="text-black-6">가이드 친절도</dt>
              <dd className="text-pink"> 5</dd>
            </dl>

            <dl className="flex gap-0.5">
              <dt className="text-black-6">일정구성</dt>
              <dd className="text-pink"> 5</dd>
            </dl>

            <dl className="flex gap-0.5">
              <dt className="text-black-6">가이드 시간/일정준수</dt>
              <dd className="text-pink"> 4</dd>
            </dl>
          </div>
        </li>
      </ul>
      {/* //TODO: bottomNav 높이만큼 bottom 값 수정하기 */}
      <Button
        text="더보기"
        styleClass="bg-gray-100 flex justify-center gap-4 z-5  text-center items-center py-2 fixed bottom-[60px] max-w-[500px] w-full"
        icon="/icons/bottomArrowIcon.svg"
      />
    </>
  );
};

export default MyReviewTabContent;
