import { PlaylistMidiaDTO } from "../adapters/AdaptersDTO";
import { ApiBase } from "./ApiBase";

class PlaylistMidiaAPI extends ApiBase<PlaylistMidiaDTO> {
  constructor() {
    super("playlistMidia");
  }
}

export const playlistMidiaAPI = new PlaylistMidiaAPI();
