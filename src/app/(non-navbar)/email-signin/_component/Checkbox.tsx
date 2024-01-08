interface Props {
  text: string;
  subText?: string;
  required: boolean;
}

const Checkbox = ({ text, subText, required }: Props) => {
  return (
    <div className="relative flex items-center p-2">
      <div className="flex items-center mr-2">
        <input type="checkbox" className="hidden" />
        <button type="button" className="w-[25px]">
          <img src="./icons/checkIcon.svg" alt="체크" />
        </button>
      </div>
      <div>
        <span className="text-sm text-black-4 font-normal leading-normal">
          {required ? `${text} (필수)` : `${text} (선택)`}
        </span>
        <div className="text-[10px] text-grey-4 font-normal leading-normal">
          {subText}
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
