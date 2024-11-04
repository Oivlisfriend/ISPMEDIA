import { ArtistaAttributes } from "../interface/Artista.Interface";
import { ApiBase } from "./ApiBase";

class ArtistaAPI extends ApiBase<ArtistaAttributes> {
  constructor() {
    super("artista");
  }
}

export const artistaAPI = new ArtistaAPI();
