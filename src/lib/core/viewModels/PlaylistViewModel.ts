import { makeAutoObservable, toJS } from "mobx";
import {
  PlaylistDTO,
  PlaylistMidiaDTO,
  PlaylistUsuaioDTO,
  UserProfileDTO,
} from "../adapters/AdaptersDTO";
import { playlistMidiaAPI } from "../api/PlaylistMidia.API";
import { playlistUsuarioAPI } from "../api/PlaylistUsuario.API";
import { getUserProfileData } from "../context/DataStorage";
import { ChangeEvent } from "react";
import { playlistAPI } from "../api/Playlist.API";
import { userProfileApi } from "../api/UserProfile.Api";
type list = {
  id_perfil_usuario: number;
  id_playlist: number;
};
export type PlaylistViewProps = {
  viewPlaylist?: PlaylistViewModel; // Usamos o AccountViewModel definido abaixo
};
class PlaylistViewModel {
  playlist: PlaylistMidiaDTO[] = [];
  payloadPlaylist: PlaylistDTO = {};
  isShowModalPlaylist: boolean = false;
  playlistMidia: PlaylistMidiaDTO[] = [];
  isVisibleSharePlaylist: boolean = false;
  users: UserProfileDTO[] = [];
  user: UserProfileDTO | null = {};
  listShare: list[] = [];
  playlistUsers!: PlaylistUsuaioDTO[];
  private idPlaylist!: number;
  namePlaylist!: string;
  currentRoute: string | undefined;

  constructor() {
    makeAutoObservable(this);
    this.getPlaylistUsuario();
    this.initialize();
  }
  initialize = async () => {
    await this.getAllUser();
    this.user = await getUserProfileData();
  };
  createPlaylist = async () => {
    try {
      console.log(this.payloadPlaylist);
      const response = await playlistAPI.create({
        item: {
          nome: this.payloadPlaylist.nome,
          estado: true,
          visibilidade: this.payloadPlaylist.visibilidade,
          data: this.getCurrentDateTimeFormatted(),
        },
      });
      if (!response) {
        return;
      }
      console.log(response);
      if (typeof response.id_playlist !== "undefined") {
        const responseUserGroup = await playlistUsuarioAPI.create({
          item: {
            id_perfil_usuario: this.user?.id_perfil_usuario,
            id_playlist: response.id_playlist,
          },
        });
        console.log(responseUserGroup);
        if (!responseUserGroup) {
          return;
        }
        await this.getPlaylistUsuario();
        this.toggleModal();
      }
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  };

  updatePlaylistName = async () => {
    try {
      console.log(this.namePlaylist);
      if (this.namePlaylist) {
        const response = await playlistAPI.update({
          id: this.idPlaylist,
          item: { nome: this.namePlaylist },
        });

        this.namePlaylist = response.nome;
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  async fetchPlaylistUsers() {
    try {
      this.playlistUsers = [];
      // Pode ser necessário ajustar esta lógica conforme a API fornecida
      const playlistUsers: PlaylistUsuaioDTO[] | null =
        await playlistUsuarioAPI.getUsersInPlaylist(this.idPlaylist);

      if (playlistUsers) {
        this.playlistUsers = playlistUsers;
      }
    } catch (error: any) {
      console.error("Erro ao obter usuários da playlist:", error.message);
    }
  }

  async getPlaylistUsuario() {
    try {
      const user: UserProfileDTO | null = await getUserProfileData();
      const response = await playlistUsuarioAPI.getByUser(
        user?.id_perfil_usuario
      );

      const playlistsUnicas = this.filtrarPlaylistsUnicas(response);

      this.playlist = playlistsUnicas;
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  }

  private filtrarPlaylistsUnicas(playlists: any[]): any[] {
    const idsVistos = new Set<number>();
    const playlistsUnicas: any[] = [];

    playlists.forEach((playlist) => {
      if (!idsVistos.has(playlist.id_playlist)) {
        idsVistos.add(playlist.id_playlist);
        playlistsUnicas.push(playlist);
      }
    });

    return playlistsUnicas;
  }

  setListShare = (id_perfil_usuario: number, id_playlist: number): void => {
    if (id_perfil_usuario <= 0) return;

    const exists = this.listShare.some(
      (t) =>
        t.id_perfil_usuario === id_perfil_usuario &&
        t.id_playlist === id_playlist
    );

    if (exists) {
      this.listShare = this.listShare.filter(
        (t) =>
          t.id_perfil_usuario !== id_perfil_usuario ||
          t.id_playlist !== id_playlist
      );
    } else {
      this.listShare.push({ id_perfil_usuario, id_playlist });
    }
  };

  toggleSharePlaylist = () => {
    this.isVisibleSharePlaylist = !this.isVisibleSharePlaylist;
  };
  toggleModal = () => {
    this.isShowModalPlaylist = !this.isShowModalPlaylist;
  };

  getCurrentDateTimeFormatted() {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Month starts from zero
    const year = currentDate.getFullYear();
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
  }
  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.payloadPlaylist.nome = event.target.value;
  };
  handleTipoChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.payloadPlaylist.visibilidade = event.target.value;
  };

  getAllUser = async () => {
    try {
      const response = await userProfileApi.list();
      if (!response) {
        this.users = [];
        return;
      }

      this.users = response;
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  };
  fetchSharePlaylist = async () => {
    try {
      const aux = toJS(this.listShare);
      const response = await playlistUsuarioAPI.created(aux);

      if (!response) {
        this.users = [];
        return;
      }
      this.toggleSharePlaylist();
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  };

  deletePlaylistUsuario = async () => {
    try {
      const response = await playlistUsuarioAPI.delete(this.idPlaylist);
      if (!response) {
        this.users = [];
      }
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  };

  openPlaylist = async (
    id: number | undefined,
    navigation: { getCurrentRoute: () => { name: string | undefined } },
    navigate: (arg0: string) => void
  ) => {
    if (id) {
      try {
        this.idPlaylist = id;
        const response: PlaylistMidiaDTO[] | null =
          await playlistMidiaAPI.getByMidia(id);
        if (!response) {
          this.playlistMidia = [];
          return;
        }
        this.playlistMidia = response;
        response.map((item: PlaylistMidiaDTO) => {
          if (item.id_playlist === id)
            this.namePlaylist = item.playlist?.nome ? item.playlist?.nome : "";
        });

        await this.fetchPlaylistUsers();

        this.currentRoute = navigation.getCurrentRoute().name;
        if (this.currentRoute === "Group") {
          console.log("Já está na rota ");
        } else {
          navigate("/Group");
        }
      } catch (error: any) {
        if (error.message !== "Invalid code") {
          console.log(error.message);
        }
      }
    }
  };
}

export default new PlaylistViewModel();
