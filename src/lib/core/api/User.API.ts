import { UserAttributes } from "../interface/User.Interface";
import { ApiBase } from "./ApiBase";

class UserAPI extends ApiBase<UserAttributes> {
  constructor() {
    super("user");
  }
}

export const userAPI = new UserAPI();
