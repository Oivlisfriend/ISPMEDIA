import { PartilhaAttributes } from "../interface/Partilha.Interface";
import { ApiBase } from "./ApiBase";

class PartilhaAPI extends ApiBase<PartilhaAttributes> {
  constructor() {
    super("partilha");
  }
}

export const partilhaAPI = new PartilhaAPI();
