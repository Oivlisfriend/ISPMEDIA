import axios from "axios";
import { GroupUserDTO } from "../adapters/AdaptersDTO";
import { ApiBase, IP } from "./ApiBase";

class GroupUserAPI extends ApiBase<GroupUserDTO> {
  constructor() {
    super("groupUser");
  }
}

export const groupUserAPI = new GroupUserAPI();
