import { makeAutoObservable } from "mobx";
import { MidiaDTO, UserProfileDTO } from "../adapters/AdaptersDTO";
import { midiaAPI } from "../api/Midia.API";
import { CriticaAttributes } from "../interface/Criticas.Interface";
import { criticaAPI } from "../api/Critica.API";
import { ChangeEvent } from "react";
import LegendaViewModel from "./LegendaViewModel";
import { getUserProfileData } from "../context/DataStorage";
import { userInfo } from "os";
import { UserProfile } from "../interface/UserProfile.Interface";

export type MidiaViewProps = {
  midiaModel: MidiaViewModel;
  selected?: string;
  setIsOpen?: (status: boolean) => void;
  open?: boolean;
  setSelected?: (status: string) => void;
};
export type MidiaView = {
  midiaView: MidiaViewModel;
};

class MidiaViewModel {
  private _fileMidia: File | null = null;
  private _fileImagem: string | null = null;
  private _fileLegenda: File | null = null;
  private _listMidias: MidiaDTO[] = [];
  private _midia: MidiaDTO = {} as MidiaDTO;

  comments: CriticaAttributes[] = [];
  comment: CriticaAttributes = {};

  private _id_midia!: number;
  private _titulo!: string;
  private _id_legenda!: number;
  private _id_genero_media!: number;
  private _id_tipo_media!: number;
  private _duracao!: string;
  private _arquivo!: string;
  private _formato_media!: string;
  private _tamanho!: string;
  private _data!: string;
  private _id_perfil_usuario!: number;
  private _estado!: boolean;
  private _imagem!: string;
  private _gostos!: number;
  private _comentarios!: number;
  private _descricao!: string;
  private _visibilidade!: string;
  reprocudeNow: string = "";
  user: UserProfileDTO | null = {};
  constructor() {
    makeAutoObservable(this);
    this.listar();
  }

  get arquivo(): string {
    return this._arquivo;
  }
  setArquivo(value: string) {
    this._arquivo = value;
  }

  get data(): string {
    return this._data;
  }
  setData(value: string) {
    this._data = value;
  }

  get duracao(): string {
    return this._duracao;
  }
  setDuracao(value: string) {
    this._duracao = value;
  }

  get estado(): boolean {
    return this._estado;
  }
  setEstado(value: boolean) {
    this._estado = value;
  }

  get formato_media(): string {
    return this._formato_media;
  }
  setFormato_media(value: string) {
    this._formato_media = value;
  }

  get id_genero_media(): number {
    return this._id_genero_media;
  }
  setId_genero_media(value: number) {
    this._id_genero_media = value;
  }

  get id_legenda(): number {
    return this._id_legenda;
  }
  setId_legenda(value: number) {
    this._id_legenda = value;
  }

  get id_midia(): number {
    return this._id_midia;
  }
  setId_midia(value: number) {
    this._id_midia = value;
  }
  get id_perfil_usuario(): number {
    return this._id_perfil_usuario;
  }
  setId_perfil_usuario(value: number) {
    this._id_perfil_usuario = value;
  }

  get id_tipo_media(): number {
    return this._id_tipo_media;
  }
  setId_tipo_media(value: number) {
    this._id_tipo_media = value;
  }

  get tamanho(): string {
    return this._tamanho;
  }
  setTamanho(value: string) {
    this._tamanho = value;
  }

  get titulo(): string {
    return this._titulo;
  }
  setTitulo(value: string) {
    this._titulo = value;
  }

  get midia(): MidiaDTO {
    return this._midia;
  }
  setMidia(value: MidiaDTO) {
    this._midia = value;
  }

  get listMidias(): MidiaDTO[] {
    return this._listMidias;
  }

  get imagem(): string {
    return this._imagem;
  }

  setImagem(imagem: string) {
    this._imagem = imagem;
  }

  get comentarios(): number {
    return this._comentarios;
  }
  setComentarios(qtd: number) {
    this._comentarios = qtd;
  }

  get gostos(): number {
    return this._gostos;
  }

  setGostos(qtd: number) {
    this._gostos = qtd;
  }
  get descricao(): string {
    return this._descricao;
  }

  setDescricao(descricao: string) {
    this._descricao = descricao;
  }

  setListaMidias(listMidias: MidiaDTO[]) {
    this._listMidias = listMidias;
  }

  get getVisibilidade(): string {
    return this._visibilidade;
  }

  setVisibilidade(visibilidade: string) {
    this._visibilidade = visibilidade;
  }

  get getFileMidia(): File | null {
    return this._fileMidia;
  }

  setFileMidia(file: File | null) {
    this._fileMidia = file;
  }

  get getFileLegenda(): File | null {
    return this._fileLegenda;
  }

  setFileLegenda(file: File | null) {
    this._fileLegenda = file;
  }

  get getFileimagem(): string | null {
    return this._fileImagem;
  }

  setFileImagem(file: File | null) {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64String = reader.result?.toString() || null;
        this._fileImagem = base64String;
        console.log(this._fileImagem); // Confirme que o valor foi definido
      };
      reader.onerror = (error) => {
        console.error("Erro ao ler o arquivo:", error);
        this._fileImagem = null;
      };
    } else {
      this._fileImagem = null;
    }
  }

  async createMidia() {
    try {
      const user = await getUserProfileData();
      LegendaViewModel.setFilLegenda(this._fileLegenda);
      await LegendaViewModel.create();

      const response = await midiaAPI.create({
        payload: {
          midia: this._fileMidia,
          data: {
            id_midia: this._id_midia,
            titulo: this._titulo,
            id_legenda: LegendaViewModel.legenda.id_legendas,
            id_genero_media: this._id_genero_media,
            id_tipo_media: this._id_tipo_media,
            duracao: this._duracao,
            formato_media: this._formato_media,
            tamanho: this._tamanho,
            data: this.getCurrentDateTimeFormatted(),
            id_perfil_usuario: user?.id_perfil_usuario,
            estado: true,
            imagem: this._fileImagem,
            descricao: this._descricao,
            visibilidade: this._visibilidade,
          },
        },
      });
      console.log("Midia inserida com sucesso!", response);
      return response;
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  }
  addComment = async () => {
    try {
      this.comment.id_perfil_usuario = this.user?.id_perfil_usuario;
      this.comment.id_midia = this._id_midia;
      console.log(JSON.stringify(this.comment));
      const response = await criticaAPI.created(this.comment);
      if (!response) return;
      console.log("Midia Listadas com sucesso!", response);
      await this.getCooments();
      this.comment.descricao = "";
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  };
  async listar() {
    try {
      const response = await midiaAPI.list();
      console.log("Midia Listadas com sucesso!", response);
      this.setListaMidias(response);
      this.user = await getUserProfileData();
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  }
  getCooments = async () => {
    try {
      const response = await criticaAPI.getByMidia(this._id_midia);
      if (!response) return;
      console.log("Chegamos!");
      this.comments = response;
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  };
  reproduceMidiaNow = (
    midia: string,
    id: number,
    navigation: { getCurrentRoute: () => { name: string | undefined } },
    navigate: (arg0: string) => void
  ) => {
    this.reproduceMidia(midia, id);

    const currentRoute = navigation.getCurrentRoute().name;
    if (currentRoute === "Reproducer") {
      console.log("Já está na rota Reproducer ");
    } else {
      navigate("/Reproducer");
    }
  };
  reproduceMidia = (midia: string, id: number) => {
    this.reprocudeNow = midia;
    this._id_midia = id;
    this.getCooments();
  };
  handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.comment.descricao = event.target.value;
  };
  handleGeneroChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this._id_genero_media = parseInt(event.target.value, 10);
  };
  handleTipoChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this._id_tipo_media = parseInt(event.target.value, 10);
  };
  handleVisibilidadeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this._visibilidade = event.target.value;
  };
  handleLegendaChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setFileLegenda(e.target.files ? e.target.files[0] : null);
  };
  handleImagemChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      this.setFileImagem(files[0]);
    }
  };
  handleMidiaChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setFileMidia(e.target.files ? e.target.files[0] : null);
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
}

export default new MidiaViewModel();
