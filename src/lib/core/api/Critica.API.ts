import { CriticaAttributes } from "../interface/Criticas.Interface";
import { ApiBase } from "./ApiBase";

class CriticaAPI extends ApiBase<CriticaAttributes> {
  constructor() {
    super("critica");
  }
}

export const criticaAPI = new CriticaAPI();
