import { UserDTO } from "../UserEntity";

export type UserLoginReqData = {
  email: string;
  password: string;
};

export type UserLoginResData = {
  user: UserDTO;
  token: string;
};
