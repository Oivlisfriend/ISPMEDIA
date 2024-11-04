import { MidiaDTO } from "../adapters/AdaptersDTO";
import { ApiBase } from "./ApiBase";

class MidiaAPI extends ApiBase<MidiaDTO> {
  constructor() {
    super("midia");
  }
}

export const midiaAPI = new MidiaAPI();
