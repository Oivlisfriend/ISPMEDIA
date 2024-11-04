import { ApiBase } from "./ApiBase";
import { GeneroDTO } from "../adapters/AdaptersDTO";

class GeneroAPI extends ApiBase<GeneroDTO> {
  constructor() {
    super("genero");
  }
}

export const generoAPI = new GeneroAPI();
