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
];

export default handlers;
