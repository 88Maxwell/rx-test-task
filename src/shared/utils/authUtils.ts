import { UserDTO } from "core/user/UserEntity";
import { LOCAL_STORAGE_AUTH_TOKEN_KEY } from "shared/sharedConstants";

export const setAuthToken = (token: string) => {
  localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN_KEY, token);
};

type AuthTokenData = {
  user: UserDTO;
};

export const parseAuthToken = (token: string) => {
  const tokenData: AuthTokenData = JSON.parse(token);
  return tokenData;
};

export const getAuthTokenData = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY);
  if (!token) return null;
  return parseAuthToken(token);
};
