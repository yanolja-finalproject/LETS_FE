"use client";

import useInput from "@/hooks/useInput";
import { useRef, useState } from "react";

interface Props {
  title: string;
  type: string;
  name: string;
  id: string;
  onInputChange?: (value: string) => void;
}

const SigninInput = ({ title, type, name, id, onInputChange }: Props) => {
  const [focus, setFocus] = useState(false);
  const input = useInput("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="relative flex flex-col w-[90%] mb-12">
      <div
        className={`absolute ${focus ? "-top-2" : "top-1/2"} ${
          focus ? "left-0" : "left-[16px]"
        } -translate-y-1/2 ${
          focus ? "text-black-2" : "text-grey-4"
        } duration-500 ${focus ? "text-[13px]" : "text-[16px]"}`}
        onClick={handleFocus}
      >
        {title}
      </div>
      <input
        className="h-[50px] bg-grey-1 outline-none border-none rounded-lg pl-[16px] caret-blue"
        type={type}
        name={name}
        id={id}
        value={input.value}
        onChange={(e) => {
          input.onChange(e);
          if (onInputChange) {
            onInputChange(e.target.value);
          }
        }}
        ref={inputRef}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          if (input.value === "") setFocus(false);
        }}
      />
    </div>
  );
};

export default SigninInput;
