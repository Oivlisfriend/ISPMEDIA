import { TipoMidiaDTO } from "../adapters/AdaptersDTO";
import { ApiBase } from "./ApiBase";

class TipoMidiaAPI extends ApiBase<TipoMidiaDTO> {
  constructor() {
    super("tipoMidia");
  }
}

export const tipoMidiaAPI = new TipoMidiaAPI();
