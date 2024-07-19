import { injectService } from "shared/injectService";
import { LoginPage } from "./LoginPage";
import UserService from "core/user/UserService";

export { LoginPage };

export default injectService("userService", UserService)(LoginPage);
