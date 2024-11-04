import { AlbumAttributes } from "../interface/Album.interface";
import { ApiBase } from "./ApiBase";

class AlbumApi extends ApiBase<AlbumAttributes> {
  constructor() {
    super("album");
  }
}

export const albumApi = new AlbumApi();
