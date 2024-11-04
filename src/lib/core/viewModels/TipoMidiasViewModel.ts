import { makeAutoObservable } from "mobx";
import { TipoMidiaDTO } from "../adapters/AdaptersDTO";
import { tipoMidiaAPI } from "../api/TipoMidia.API";

export type TipoMidiaViewProps = {
  TipoMidiaView: TipoMidiaViewModel;
};

class TipoMidiaViewModel {
  private _id_tipo_media!: number;
  private _nome!: string;
  private _listTipos!: TipoMidiaDTO[];
  constructor() {
    makeAutoObservable(this);
    this.listar();
  }

  get id_tipo_media(): number {
    return this._id_tipo_media;
  }
  setId_Tipo_Media(id: number) {
    this._id_tipo_media = id;
  }

  get nome() {
    return this._nome;
  }

  setNome(nome: string) {
    this._nome = nome;
  }
  get ListaTipos(): TipoMidiaDTO[] {
    return this._listTipos;
  }
  async setListTipoMidia(lista: TipoMidiaDTO[]) {
    this._listTipos = await lista;
  }

  async listar() {
    try {
      const response = await tipoMidiaAPI.list();
      console.log(response);
      this.setListTipoMidia(response);
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  }
}

export default new TipoMidiaViewModel();
