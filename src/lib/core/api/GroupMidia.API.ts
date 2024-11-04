import { GrupoMidiaAttributes } from "../interface/GroupMidia.Interface";
import { ApiBase } from "./ApiBase";

class GroupMidiaApi extends ApiBase<GrupoMidiaAttributes> {
  constructor() {
    super("groupMedia");
  }
}

export const groupMidiaApi = new GroupMidiaApi();
