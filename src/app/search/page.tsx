import React from "react";
import ForwardBox from "./_component/ForwardBox";
import ContentsBox from "./_component/ContentsBox";

const SearchKeywordPage = () => {
  return (
    <div className="flex flex-col w-full">
      <ContentsBox title="여행 추천 태그">
        <div>hashtages</div>
      </ContentsBox>
      <ContentsBox title="최근 많이 본 여행지">
        <div>card items</div>
      </ContentsBox>
      <ForwardBox />
    </div>
  );
};

export default SearchKeywordPage;
