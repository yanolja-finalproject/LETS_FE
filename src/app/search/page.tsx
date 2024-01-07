import React from "react";
import ForwardBox from "./_component/ForwardBox";
import ContentsBox from "./_component/ContentsBox";
import SearchHeader from "./_component/SearchHeader";

const SearchPage = () => {
  return (
    <div className="w-full flex flex-col">
      <SearchHeader />
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

export default SearchPage;
