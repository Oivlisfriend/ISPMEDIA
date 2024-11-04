import { makeAutoObservable, toJS } from "mobx";
import { getUserProfileData } from "../context/DataStorage";
import {
  GroupMidiaDTO,
  GroupUserDTO,
  UserProfileDTO,
} from "../adapters/AdaptersDTO";
import { groupUserAPI } from "../api/GroupUser.API";
import { groupApi } from "../api/Group.API";
import { GrupoAttributes } from "../interface/Grupo.Interface";
import { ChangeEvent } from "react";
import { groupMidiaApi } from "../api/GroupMidia.API";

type list = {
  id_perfil_usuario: number;
  id_group: number;
};

export type GroupViewProps = {
  viewGroup?: GroupViewModel; // Usamos o AccountViewModel definido abaixo
};
class GroupViewModel {
  private UserProfile: UserProfileDTO | null = null;
  group: GroupUserDTO[] = [];
  payloadGroup: GrupoAttributes = {
    tipo: "Privado",
  };
  isShowModalGroup: boolean = false;
  groupMidia: GroupMidiaDTO[] = [];
  nameGroup!: string;
  isVisibleShareGroup: boolean = false;
  groupUsers!: GroupUserDTO[];
  private idGroup!: number;
  users: UserProfileDTO[] = [];
  currentRoute: string | undefined = "";
  listShare: list[] = [];

  constructor() {
    makeAutoObservable(this);

    this.getGroups();
  }
  get getIsShowModalGroup() {
    return this.isShowModalGroup;
  }
  set getIsShowModalGroup(value: boolean) {
    this.isShowModalGroup = value;
  }

  setListShare = (id_perfil_usuario: number, id_group: number): void => {
    if (id_perfil_usuario <= 0) return;

    const exists = this.listShare.some(
      (t) =>
        t.id_perfil_usuario === id_perfil_usuario && t.id_group === id_group
    );

    if (exists) {
      this.listShare = this.listShare.filter(
        (t) =>
          t.id_perfil_usuario !== id_perfil_usuario || t.id_group !== id_group
      );
    } else {
      this.listShare.push({ id_perfil_usuario, id_group });
    }
  };

  fetchShareGroup = async () => {
    try {
      const aux = toJS(this.listShare);
      const response = await groupUserAPI.created(aux);

      if (!response) {
        this.users = [];
        return;
      }
      this.toggleShareGroup();
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  };

  toggleShareGroup = () => {
    this.isVisibleShareGroup = !this.isVisibleShareGroup;
  };

  toggleModal = () => {
    this.isShowModalGroup = !this.isShowModalGroup;
  };

  async fetchGroupUsers() {
    try {
      this.groupUsers = [];
      // Pode ser necessário ajustar esta lógica conforme a API fornecida
      const playlistUsers: GroupUserDTO[] | null = await groupUserAPI.getByUser(
        this.idGroup
      );
      console.log(playlistUsers);

      if (playlistUsers) {
        this.groupUsers = playlistUsers;
      }
    } catch (error: any) {
      console.error("Erro ao obter usuários da playlist:", error.message);
    }
  }

  deleteGroupUsuario = async () => {
    try {
      const response = await groupUserAPI.delete(this.idGroup);
      if (!response) {
        this.users = [];
      }
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  };

  async getGroups() {
    try {
      this.UserProfile = await getUserProfileData();
      const response: GroupUserDTO[] = await groupUserAPI.getByUser(
        Number(this.UserProfile?.id_usuario)
      );
      if (!response) {
        return;
      }
      console.log("Grupo carregado ", response);
      this.group = response;
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  }
  createGroup = async () => {
    try {
      this.UserProfile = await getUserProfileData();
      const response = await groupApi.created({
        nome: this.payloadGroup.nome,
        estado: true,
        tipo: this.payloadGroup.tipo,
      });
      console.log(response);
      if (!response) {
        return;
      }
      console.log(response);

      if (response) {
        const responseUserGroup = await groupUserAPI.created({
          id_grupo: response.id_grupo,
          id_perfil_usuario: this.UserProfile?.id_perfil_usuario,
          id_papel_usuario_grupo: 1,
          data_entrada: this.getCurrentDateTimeFormatted.toString(),
        });
        console.log(responseUserGroup);
        if (!responseUserGroup) {
          return;
        }

        await this.getGroups();
        this.toggleModal();
      }
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
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
    this.payloadGroup.nome = event.target.value;
  };
  handleTipoChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.payloadGroup.tipo = event.target.value;
  };

  openGroup = async (
    id: number | undefined,
    navigation: { getCurrentRoute: () => { name: string | undefined } },
    navigate: (arg0: string) => void
  ) => {
    if (id) {
      try {
        this.idGroup = id;
        const response = await groupMidiaApi.getByMidia(id);
        if (!response) {
          this.groupMidia = [];
          return;
        }
        console.log(response);
        this.groupMidia = response;
        response.map((item: GroupMidiaDTO) => {
          if (item.id_grupo === id)
            this.nameGroup = item.grupo?.nome ? item.grupo?.nome : "";
        });

        await this.fetchGroupUsers();
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

export default new GroupViewModel();
