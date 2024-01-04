import React from "react";
import ForwardBox from "./_component/ForwardBox";

const SearchKeywordPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div>여행 추천 태그</div>
      <div>많이 본 여행지</div>
      <ForwardBox />
    </div>
  );
};

export default SearchKeywordPage;
