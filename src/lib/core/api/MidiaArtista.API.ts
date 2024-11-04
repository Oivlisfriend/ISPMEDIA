import { MidiaArtistaAttributes } from "../interface/MidiaArtista.Interface";
import { ApiBase } from "./ApiBase";

class MidiaAlbumAPI extends ApiBase<MidiaArtistaAttributes> {
  constructor() {
    super("midiaArtista");
  }
}

export const midiaAlbumAPI = new MidiaAlbumAPI();
