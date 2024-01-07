import getHashtags from "@/api/search/getHashtags";
import { FetchResponse, HashtagItem } from "@/app/types";
import React from "react";
import Hashtag from "./Hashtag";

const HashtagsBox = async () => {
  const hashtags: FetchResponse<HashtagItem[]> = await getHashtags();

  return (
    <ul className="w-full">
      {hashtags.data?.map((hashtag: HashtagItem) => <Hashtag data={hashtag} />)}
    </ul>
  );
};

export default HashtagsBox;
