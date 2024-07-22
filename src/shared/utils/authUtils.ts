import { UserDTO } from "core/user/UserEntity";
import { jwtDecode } from "jwt-decode";
import { LOCAL_STORAGE_AUTH_TOKEN_KEY } from "shared/sharedConstants";

export const setAuthToken = (token: string) => {
  localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN_KEY, token);
};

type AuthTokenData = {
  user: UserDTO;
  alg: "HS256";
  typ: "JWT";
};

export const parseAuthToken = (token: string) => {
  const tokenJSON = jwtDecode<AuthTokenData>(token);
  return tokenJSON;
};

export const getAuthTokenData = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY);

  if (!token) return null;

  const data = parseAuthToken(token);

  return data;
};
