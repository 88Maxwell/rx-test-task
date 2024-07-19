import { injectService } from "shared/injectService";
import { LoginPage } from "./LoginPage";
import { UserAuthorizationStore } from "core/user/stores/UserAuthorizationStore";

export { LoginPage };

export default injectService("userAuthorizationStore", UserAuthorizationStore)(LoginPage);
