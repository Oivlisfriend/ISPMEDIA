import { MidiaAlbumAttributes } from "../interface/MidiaAlbum.Interface";
import { ApiBase } from "./ApiBase";

class MidiaAlbumAPI extends ApiBase<MidiaAlbumAttributes> {
  constructor() {
    super("midiaAlbum");
  }
}

export const midiaAlbumAPI = new MidiaAlbumAPI();
