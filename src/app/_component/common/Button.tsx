interface Props {
  text: string;
  styleClass?: string;
  onClickFn?: () => void;
  disabled?: boolean;
  theme?: string;
  icon?: string;
}

const themes: { [key: string]: string } = {
  wide: "w-full h-[56px] disabled:bg-grey-3 hover:bg-[#bb1e4a] bg-pink disabled:text-grey-4 text-white font-bold rounded-xl",
  md: "p-[8px]",
};

const Button = ({
  text,
  styleClass,
  onClickFn,
  disabled = false,
  theme = "",
  icon,
}: Props) => {
  return (
    <button
      type="button"
      className={`${themes[theme]} ${styleClass}`}
      disabled={disabled}
      onClick={onClickFn}
    >
      {icon && <img src={icon} alt={text} />}
      {text}
    </button>
  );
};

export default Button;
