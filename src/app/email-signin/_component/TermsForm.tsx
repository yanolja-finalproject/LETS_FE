"use client";

import { useState } from "react";

interface Props {
  setTermsForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const TermsForm = ({ setTermsForm }: Props) => {
  const [action, setAction] = useState(true);

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full ${
        action
          ? "animate-transparencyAnimation"
          : "animate-transparencyAnimationReverse"
      } overflow-hidden`}
      onClick={() => {
        setAction(false);
        setTimeout(() => {
          setTermsForm(false);
        }, 200);
      }}
    >
      <div
        className={`absolute ${
          action
            ? "animate-positionTopAnimation"
            : "animate-positionTopAnimationReverse"
        } left-1/2 -translate-x-1/2 w-full max-w-[500px] bg-white rounded-t-lg`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="relative h-[64px]">
          <button
            type="button"
            className="absolute left-[20px] top-1/2 -translate-y-1/2"
            onClick={() => {
              setAction(false);
              setTimeout(() => {
                setTermsForm(false);
              }, 200);
            }}
          >
            <img src="./icons/exitButtonIcon.svg" alt="나가기 버튼" />
          </button>
          <span className="text-[18px] text-black-1 font-semibold absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            약관 동의
          </span>
        </div>
        <div className="w-[87%] m-auto">
          <div className="relative flex items-center">
            <div className="flex items-center mr-2 mb-2 p-1">
              <input type="checkbox" className="hidden" />
              <button type="button" className="">
                <img src="./icons/allCheckIcon.svg" alt="전체 동의" />
              </button>
            </div>
            <div className="text-black-2 text-[18px] font-semibold">
              <span>전체 동의 </span>
              <span className="text-[12px] font-normal">(선택 포함)</span>
            </div>
          </div>
          <div className="relative flex items-center p-2">
            <div className="flex items-center mr-2">
              <input type="checkbox" className="hidden" />
              <button type="button" className="w-[25px]">
                <img src="./icons/checkIcon.svg" alt="체크" />
              </button>
            </div>
            <div>
              <span className="text-[14px] text-black-4 font-normal leading-normal">
                만 14세 이상 이용, 서비스 이용약관, 개인정보 수집 및 동의 (필수)
              </span>
            </div>
          </div>
          <div className="relative flex items-center p-2">
            <div className="flex items-center mr-2">
              <input type="checkbox" className="hidden" />
              <button type="button" className="w-[25px]">
                <img src="./icons/checkIcon.svg" alt="체크" />
              </button>
            </div>
            <div>
              <span className="text-[14px] text-black-4 font-normal leading-normal">
                개인 정보 수집 및 이용 동의 (선택)
              </span>
            </div>
          </div>
          <div className="relative flex items-center p-2">
            <div className="flex items-center mr-2">
              <input type="checkbox" className="hidden" />
              <button type="button" className="w-[25px]">
                <img src="./icons/checkIcon.svg" alt="체크" width="100%" />
              </button>
            </div>
            <div>
              <div className="text-[14px] text-black-4 font-normal leading-normal">
                숙소 특가, 쿠폰 등 마케팅 수신 동의 (선택)
              </div>
              <div className="text-[10px] text-grey-4 font-normal leading-normal">
                마케팅 정보는 문자, E-mail, Push 알림으로 받을 수 있으며 동의
                여부는 알림 설정에서 확인 가능합니다.
              </div>
            </div>
          </div>
          <div className="relative flex items-center p-2">
            <div className="flex items-center mr-2">
              <input type="checkbox" className="hidden" />
              <button type="button" className="w-[25px]">
                <img src="./icons/checkIcon.svg" alt="체크" />
              </button>
            </div>
            <div>
              <span className="text-[14px] text-black-4 font-normal leading-normal">
                위치 정보 이용 약관 동의 (선택)
              </span>
            </div>
          </div>
        </div>

        <div className="w-[87%] m-auto my-4">
          <button
            type="button"
            className="w-full h-[56px] disabled:bg-grey-3 hover:bg-[#bb1e4a] bg-pink disabled:text-grey-4 text-[18px] text-white font-semibold rounded-xl"
            disabled
          >
            동의하고 계속하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsForm;
