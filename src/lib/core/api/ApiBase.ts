import axios from "axios";
export const IP = "http://192.168.18.7:3333";

interface IApiBase<T> {
  create(item: T, payload: File): Promise<T>;
  list(): Promise<T[]>;
  get(id: number): Promise<T>;
  update(id: number, item: T): Promise<T>;
  delete(id: number): Promise<T>;
}

export class ApiBase<T> implements IApiBase<T> {
  private path: string;

  constructor(path: string) {
    this.path = `${IP}/${path}`;
  }

  async create({ item, payload }: any): Promise<T> {
    const response = payload
      ? await axios.post(`${this.path}/create`, payload, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
      : await axios.post(`${this.path}/create`, item);

    return response.data.data;
  }
  async created(payload: any): Promise<any> {
    const response = await axios.post(`${this.path}/create`, payload);

    return response.data.data;
  }

  async list(): Promise<T[]> {
    const response = await axios.get(`${this.path}`);
    return response.data.data;
  }
  async listUser(): Promise<T[]> {
    const response = await axios.get(`http://localhost:3333/user`);
    return response.data.data;
  }

  async get(id: number): Promise<T> {
    const response = await axios.get(`${this.path}/get/${id}`);
    return response.data;
  }

  async getByUser(id: number | undefined): Promise<T[]> {
    console.log(id);
    const response = await axios.get(`${this.path}/getByUserId/${id}`);
    console.log(response.data.data);
    return response.data.data;
  }
  async getByMidia(id: number | undefined): Promise<T[]> {
    const response = await axios.get(`${this.path}/getMidiaById/${id}`);
    console.log(response.data.data);
    return response.data.data;
  }
  async update({ id, item }: any): Promise<T> {
    console.log(item);
    const response = await axios.put(`${this.path}/update/${id}`, item);
    return response.data;
  }

  async delete(id: number): Promise<T> {
    const response = await axios.delete(`${this.path}/delete/${id}`);
    return response.data;
  }
}
