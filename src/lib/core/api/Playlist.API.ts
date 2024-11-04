import { PlaylistAtributes } from "../interface/Playlist.Interface";
import { ApiBase } from "./ApiBase";

class PlaylistAPI extends ApiBase<PlaylistAtributes> {
  constructor() {
    super("playlist");
  }
}

export const playlistAPI = new PlaylistAPI();
