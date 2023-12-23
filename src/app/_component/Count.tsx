"use client";

import useCountStore from "@/store/useCountStore";

const Count = () => {
  const countStore = useCountStore((state) => state);

  return (
    <div className="mt-5">
      <h1>zustand 상태관리</h1>
      <p>{countStore.num}</p>
      <button
        type="button"
        onClick={countStore.increasePopulation}
        className="border-2 border-solid border-black"
      >
        증가
      </button>
      <button
        type="button"
        onClick={countStore.removeAllBears}
        className="border-2 border-solid border-black"
      >
        초기화
      </button>
    </div>
  );
};

export default Count;
