import React from "react";

interface Props {
  isOpen: boolean;
  onClose: VoidFunction;
  onConfirm: VoidFunction;
}
const ConfirmModal = ({ isOpen, onClose, onConfirm }: Props) => {
  if (!isOpen) return null;
  return (
    // TODO: 모달 컴포넌트 분리 예정
    <div className="fixed top-0 left-0 w-full h-full bg-black-6">
      <div className="w-[87.2%] web:w-[327px] mx-auto absolute top-[30%] left-[50%] translate-x-[-50%] rounded-md bg-white h-[176px] flex flex-col justify-evenly ">
        <p className="text-lg font-bold text-center">정말로 탈퇴 하시겠어요?</p>
        <div className="flex flex-row justify-between items-between px-[72px]">
          <button
            className="text-black-4 font-medium"
            type="button"
            onClick={onConfirm}
          >
            예
          </button>
          <button
            className="text-blue font-bold"
            type="button"
            onClick={onClose}
          >
            아니오
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
