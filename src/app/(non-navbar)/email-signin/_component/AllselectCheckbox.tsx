interface Props {
  text: string;
  subText?: string;
}

const AllselectCheckbox = ({ text, subText }: Props) => {
  return (
    <div className="relative flex items-center mb-2">
      <div className="flex items-center mr-2 p-1">
        <input type="checkbox" className="hidden" />
        <button type="button">
          <img src="./icons/allCheckIcon.svg" alt="전체 동의" />
        </button>
      </div>
      <div className="text-black-2 text-lg font-semibold">
        <span>{text} </span>
        <span className="text-xs font-normal">{subText}</span>
      </div>
    </div>
  );
};

export default AllselectCheckbox;
