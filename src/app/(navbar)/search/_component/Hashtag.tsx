import { HashtagItem } from "@/app/types";
import hashtagStyle from "@/utils/hashtagStyle";
import React from "react";

interface Props {
  data: HashtagItem;
}

const Hashtag = ({ data }: Props) => {
  const { fontSize, fontWeight } = hashtagStyle(data.rank);

  return (
    <div
      className="text-black-4 px-3 py-1 flex justify-center items-center border border-solid border-grey-2 rounded-full active:bg-pink-2 active:text-white active:border-pink-2"
      style={{ fontSize, fontWeight }}
    >
      {data.name}
    </div>
  );
};

export default Hashtag;
