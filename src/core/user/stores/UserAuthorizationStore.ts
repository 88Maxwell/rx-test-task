import { BehaviorSubject, map, Observable } from "rxjs";
import { inject, injectable, singleton } from "tsyringe";
import { UserDTO, UserEntity } from "../UserEntity";
import UserService from "../UserService";
import { getAuthTokenData, setAuthToken } from "shared/utils/authUtils";

@singleton()
@injectable()
export class UserAuthorizationStore {
  private user$$: BehaviorSubject<UserEntity | null>;

  constructor(@inject(UserService) private userService: UserService) {
    this.user$$ = new BehaviorSubject<UserEntity | null>(null);
    this.userService = userService;

    this.login = this.login.bind(this);
    this.getAuthorizedUser$ = this.getAuthorizedUser$.bind(this);
    this.getIsUserAuthorized$ = this.getIsUserAuthorized$.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.logout = this.logout.bind(this);
  }

  getAuthorizedUser$(): Observable<UserEntity | null> {
    return this.user$$.asObservable().pipe(
      map((u) => {
        if (u) return u;
        const userLocalStorage = this.getUserFromLocalStorage();
        return userLocalStorage;
      })
    );
  }

  getIsUserAuthorized$(): Observable<boolean> {
    return this.getAuthorizedUser$().pipe(map((u) => Boolean(u)));
  }

  private getUserFromLocalStorage() {
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
    return this.userService.login(userData).subscribe({
      next: ({ user, token }) => {
        setAuthToken(token);
        this.updateUser(user);
      },
    });
  }
}
