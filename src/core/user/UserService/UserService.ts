import { from, share } from "rxjs";
import { HTTPClient } from "shared/HttpClient";
import { inject, injectable, singleton } from "tsyringe";
import { UserLoginReqData } from "./UserServiceTypes";
import { UserDTO } from "../UserEntity";

@singleton()
@injectable()
export class UserService {
  constructor(@inject(HTTPClient) private httpClient: HTTPClient) {}

  login(data: UserLoginReqData) {
    return from(this.httpClient.post<UserDTO>("login", { data })).pipe(share());
  }
}
