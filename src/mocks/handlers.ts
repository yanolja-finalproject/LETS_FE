import { http, HttpResponse } from "msw";

const User = [
  { id: "test1", nickname: "test1" },
  { id: "test2", nickname: "test2" },
  { id: "test3", nickname: "test3" },
];

const handlers = [
  http.get("/api/hi", () => {
    console.log("메인");
    return HttpResponse.json("hi");
  }),

  http.post("/api/login", () => {
    console.log("로그인");
    return HttpResponse.json(User[1], {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    });
  }),

  http.post("/api/logout", () => {
    console.log("로그아웃");
    return new HttpResponse(null, {
      headers: {
        "Set-Cookie": "connect.sid=;HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),

  http.post("/api/users", async () => {
    console.log("회원가입");
    return HttpResponse.text(JSON.stringify("ok"), {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),
  http.get("/v1/search/hashtags", () => {
    const hashtags = [
      {
        name: "자연",
        searchedCount: 1,
        rank: 9,
      },
      {
        name: "건강/웰니스",
        searchedCount: 443,
        rank: 1,
      },
      {
        name: "허니문",
        searchedCount: 133,
        rank: 3,
      },
      {
        name: "다이닝/미식",
        searchedCount: 333,
        rank: 2,
      },
      {
        name: "로컬",
        searchedCount: 43,
        rank: 4,
      },
      {
        name: "문화/역사",
        searchedCount: 13,
        rank: 6,
      },
      {
        name: "휴양/레저",
        searchedCount: 33,
        rank: 5,
      },
      {
        name: "쇼핑",
        searchedCount: 3,
        rank: 7,
      },
      {
        name: "체험/액티비티",
        searchedCount: 2,
        rank: 8,
      },
      {
        name: "골프/스포츠",
        searchedCount: 0,
        rank: 10,
      },
    ];

    return HttpResponse.json({
      code: 200,
      data: hashtags,
    });
  }),
];

export default handlers;
