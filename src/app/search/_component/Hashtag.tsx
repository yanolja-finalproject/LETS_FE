import { HashtagItem } from "@/app/types";
import React from "react";

interface Props {
  data: HashtagItem;
}

const Hashtag = ({ data }: Props) => {
  return <li className="w-full text-black-4 ">{data.name}</li>;
};

export default Hashtag;
