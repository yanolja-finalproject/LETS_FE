// 데이터 패칭
export interface FetchResponse<T> {
  code: string;
  data?: T;
}

// search 페이지 관련 데이터
export interface HashtagItem {
  name: string;
  searchedCount: number;
  rank: number;
}
