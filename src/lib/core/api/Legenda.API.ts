import { ApiBase } from "./ApiBase";
import { LegendasDTO } from "../adapters/AdaptersDTO";

class LegendaAPI extends ApiBase<LegendasDTO> {
  constructor() {
    super("legenda");
  }
}

export const legendaAPI = new LegendaAPI();
