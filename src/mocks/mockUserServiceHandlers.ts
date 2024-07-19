import { faker } from "@faker-js/faker";
import { UserLoginReqData, UserLoginResData } from "core/user/UserService/UserServiceTypes";
import { http, HttpResponse } from "msw";

export const mockUserServiceHandlers = [
  http.post<never, UserLoginReqData, UserLoginResData>("login", async ({ request }) => {
    const data = await request.json();
    const user = {
      id: faker.string.uuid(),
      createdAt: +faker.date.anytime(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: data.email,
    };

    return HttpResponse.json({
      user,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlciI6eyJpZCI6ImZha2VfaWQiLCJmaXJzdE5hbWUiOiJmYWtlX2ZpcnN0TmFtZSIsImxhc3ROYW1lIjoiZmFrZV9sYXN0TmFtZSIsImVtYWlsIjoiZmFrZV9lbWFpbCIsImNyZWF0ZWRBdCI6ImZha2VfY3JlYXRlZEF0In0sImlhdCI6MTUxNjIzOTAyMn0.mc2PE2SGMoNHPtLxMQYEmtopT-VO-S_Mcd4AgDpDdLI",
    });
  }),
];
