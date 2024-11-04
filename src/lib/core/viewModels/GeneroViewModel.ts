import { makeAutoObservable } from "mobx";
import { GeneroDTO } from "../adapters/AdaptersDTO";
import { generoAPI } from "../api/Genero.API";

export type GeneroViewProps = {
  viewGenero: GeneroViewModel;
};

class GeneroViewModel {
  private genero!: GeneroDTO;
  private listGenero!: GeneroDTO[];

  constructor() {
    makeAutoObservable(this);
    this.getGeneros();
  }

  async getGeneros() {
    try {
      this.listGenero = await generoAPI.list();
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  }

  get getNome(): string | undefined {
    return this.genero.nome;
  }

  setNome(nome: string) {
    this.genero.nome = nome;
  }

  get getIdGenero(): number | undefined {
    return this.genero.id_genero_media;
  }

  setIdGenero(id: number) {
    this.genero.id_genero_media = id;
  }

  get getGenero(): GeneroDTO {
    return this.genero;
  }

  get getListGenero(): GeneroDTO[] {
    return this.listGenero;
  }

  createGenero = async () => {
    try {
      this.genero = await generoAPI.create(this.genero);
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  };
}

export default new GeneroViewModel();
