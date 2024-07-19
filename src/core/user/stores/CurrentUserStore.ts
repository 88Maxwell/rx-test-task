import { BehaviorSubject } from "rxjs";
import { inject, injectable, singleton } from "tsyringe";
import { UserEntity } from "../UserEntity";
import UserService from "../UserService";

@singleton()
@injectable()
export class UserAuthorizationStore {
  private user$$: BehaviorSubject<UserEntity | null>;

  constructor(@inject(UserService) private userService: UserService) {
    this.user$$ = new BehaviorSubject<UserEntity | null>(null);
    this.userService = userService;
  }

  getAuthorizedUser$() {
    return this.user$$.asObservable();
  }

  getAuthorizedUser() {
    this.user$$.getValue();
  }

  login(userData: Parameters<UserService["login"]>[0]) {
    this.userService.login(userData).subscribe({
      next: (user) => {
        const currentUser = new UserEntity(user);
        this.user$$.next(currentUser);
      },
    });
  }
}
