import { UserProfile } from "../interface/UserProfile.Interface";
import { ApiBase } from "./ApiBase";

class UserProfileApi extends ApiBase<UserProfile> {
  constructor() {
    super("userProfile");
  }
}

export const userProfileApi = new UserProfileApi();
