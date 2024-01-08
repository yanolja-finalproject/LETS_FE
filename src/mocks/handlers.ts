import { http, HttpResponse } from "msw";

const handlers = [
  http.get("/api/hi", () => {
    console.log("메인");
    return HttpResponse.json("hi");
  }),

  http.post("/v1/users/email/confirm", () => {
    console.log("인증번호 요청");
    return HttpResponse.json({
      code: 200,
    });
  }),

  http.get("/v1/users/email/verify/:code", () => {
    console.log("이메일 인증");
    return HttpResponse.json({
      code: 200,
    });
  }),

  http.get("/v1/users/email", () => {
    console.log("회원가입");
    return HttpResponse.json({
      code: 200,
      data: {
        email: "user@example.com",
        username: "test",
        nickname: "dqnaQwncD",
      },
    });
  }),

  http.post("/v1/users/email/login", async ({ request }) => {
    console.log("로그인");
    const data = (await request.json()) as {
      id: string;
      password: string;
    };

    if (data.id === "a") {
      return HttpResponse.json({ code: 409 });
    }

    return HttpResponse.json(
      { code: 200 },
      {
        headers: {
          "Set-Cookie": "connect.accessToken=msw-cookie;HttpOnly;Path=/",
        },
      },
    );
  }),

  http.post("/v1/users/logout", () => {
    console.log("로그아웃");
    return HttpResponse.json(
      { code: 200 },
      {
        headers: {
          "Set-Cookie": "connect.accessToken=;HttpOnly;Path=/;Max-Age=0",
        },
      },
    );
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
