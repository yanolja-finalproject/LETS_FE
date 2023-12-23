"use client";

import useInput from "@/hooks/useInput";

const SigninForm = () => {
  const emailInput = useInput("");
  const passwordInput = useInput("");

  const handleSignin = () => {
    console.log("로그인 버튼");
  };

  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          이메일 주소
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="이메일을 입력하세요."
            value={emailInput.value}
            onChange={emailInput.onChange}
          />
        </label>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-600"
        >
          비밀번호
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="비밀번호를 입력하세요."
            value={passwordInput.value}
            onChange={passwordInput.onChange}
          />
        </label>
      </div>
      <div className="flex">
        <button
          type="submit"
          className="w-full p-3 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600"
          onClick={handleSignin}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default SigninForm;
