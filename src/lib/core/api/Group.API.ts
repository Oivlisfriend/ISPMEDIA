import { GrupoAttributes } from "../interface/Grupo.Interface";
import { ApiBase } from "./ApiBase";

class GroupAPI extends ApiBase<GrupoAttributes> {
  constructor() {
    super("group");
  }
}

export const groupApi = new GroupAPI();
