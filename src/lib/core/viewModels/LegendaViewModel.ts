import { makeObservable } from "mobx";
import { LegendasDTO } from "../adapters/AdaptersDTO";
import { legendaAPI } from "../api/Legenda.API";

export type LegendaViewProps = {
  LegendaModel: LegendaViewModel;
};

class LegendaViewModel {
  private _id_legendas!: number;
  private _arquivo!: string;
  private _estado!: string;
  private _legenda!: LegendasDTO;
  private _listLegendas!: LegendasDTO[];
  private _fileLegenda: File | null = null;

  constructor() {
    makeObservable(this);
    this.listar();
  }

  get getFileLegenda(): File | null {
    return this._fileLegenda;
  }

  setFilLegenda(file: File | null) {
    this._fileLegenda = file;
  }

  get getArquivo(): string {
    return this._arquivo;
  }
  setArquivo(arquivo: string) {
    this._arquivo = arquivo;
  }

  get getEstado(): string {
    return this._estado;
  }
  setEstado(estado: string) {
    this._estado = estado;
  }

  get legenda(): LegendasDTO {
    return this._legenda;
  }
  setLegenda(legenda: LegendasDTO) {
    this._legenda = legenda;
  }

  get getListLegendas(): LegendasDTO[] {
    return this._listLegendas;
  }

  setListLegendas(listaLegendas: LegendasDTO[]) {
    this._listLegendas = listaLegendas;
  }

  async listar() {
    try {
      const response = await legendaAPI.list();
      console.log("Lendas processadas! ", response);
      this.setListLegendas(response);
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  }
  async create() {
    if (!this._fileLegenda) {
      throw new Error("Nenhum arquivo de legenda definido");
    }

    const formData = new FormData();
    if (this._fileLegenda) formData.append("legenda", this._fileLegenda);

    try {
      const response = await legendaAPI.create({ payload: formData });
      console.log("Legenda inserida com sucesso!", response);
      this.setLegenda(response);
      return response;
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log("Erro ao enviar legenda:", error.message);
      }
    }
  }
}

export default new LegendaViewModel();
