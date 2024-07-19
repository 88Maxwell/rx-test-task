// import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";
import { UserLoginReqData, UserLoginResData } from "core/user/UserService/UserServiceTypes";
import { http, HttpResponse } from "msw";

const sign = (data: object) => {
  const header = {
    alg: "randomJwtHeaderAlgorythm", // abstracted here
    typ: "JWT",
  };
  const payload = {
    ...data,
    iat: faker.date.anytime().valueOf(),
    exp: faker.date.anytime().valueOf(),
  };

  const encodedHeader = Buffer.from(JSON.stringify(header)).toString("base64url");
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = faker.random.alphaNumeric(64);

  return `${encodedHeader}.${encodedPayload}.${signature}`;
};

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
    const token = sign({ user, iat: Math.floor(Date.now() / 1000) - 30 });

    return HttpResponse.json({ token });
  }),
];
