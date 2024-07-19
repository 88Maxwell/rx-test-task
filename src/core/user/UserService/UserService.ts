import { from, share } from "rxjs";
import { HTTPClient } from "shared/HttpClient";
import { inject, injectable, singleton } from "tsyringe";
import { UserLoginReqData, UserLoginResData } from "./UserServiceTypes";

@singleton()
@injectable()
export class UserService {
  constructor(@inject(HTTPClient) private httpClient: HTTPClient) {
    this.httpClient = httpClient;

    this.login = this.login.bind(this);
  }

  login(data: UserLoginReqData) {
    return from(this.httpClient.post<UserLoginResData>("login", { data })).pipe(share());
  }
}
