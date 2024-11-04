import axios from "axios";
import { PlaylistMidiaDTO } from "../adapters/AdaptersDTO";
import { ApiBase } from "./ApiBase";
import { IP } from "./ApiBase";
class PlaylistUsuarioAPI extends ApiBase<PlaylistMidiaDTO> {
  constructor() {
    super("playlistusuario");
  }

  async getUsersInPlaylist(id: number) {
    const response = await axios.get(
      `${IP}/playlistusuario/getUsersPlaylist/${id}`
    );
    console.log(response.data.data);
    return response.data.data;
  }
}

export const playlistUsuarioAPI = new PlaylistUsuarioAPI();
