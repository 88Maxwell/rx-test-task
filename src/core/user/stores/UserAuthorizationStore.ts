import { BehaviorSubject } from "rxjs";
import { inject, injectable, singleton } from "tsyringe";
import { UserDTO, UserEntity } from "../UserEntity";
import UserService from "../UserService";
import { getAuthTokenData, parseAuthToken, setAuthToken } from "shared/utils/authUtils";

@singleton()
@injectable()
export class UserAuthorizationStore {
  private user$$: BehaviorSubject<UserEntity | null>;

  constructor(@inject(UserService) private userService: UserService) {
    this.user$$ = new BehaviorSubject<UserEntity | null>(null);
    this.userService = userService;

    this.login = this.login.bind(this);
    this.getAuthorizedUser$ = this.getAuthorizedUser$.bind(this);
    this.getAuthorizedUser = this.getAuthorizedUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.logout = this.logout.bind(this);
  }

  getAuthorizedUser$() {
    return this.user$$.asObservable();
  }

  getAuthorizedUser() {
    const user = this.user$$.getValue();
    if (user) return user;
    const tokenData = getAuthTokenData();
    if (!tokenData) return null;
    const currentUser = this.updateUser(tokenData.user);
    return currentUser;
  }

  private updateUser(user: UserDTO) {
    const currentUser = new UserEntity(user);
    this.user$$.next(currentUser);
    return currentUser;
  }

  logout() {
    setAuthToken("");
    this.user$$.next(null);
  }

  login(userData: Parameters<UserService["login"]>[0]) {
    console.log("lek");
    return this.userService.login(userData).subscribe({
      error: (error) => {
        console.log({ error });
      },
      next: ({ token }) => {
        console.log({ token });
        setAuthToken(token);
        const tokenData = parseAuthToken(token);
        this.updateUser(tokenData.user);
      },
    });
  }
}
