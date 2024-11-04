import { UserProfile } from "../interface/UserProfile.Interface";
import { SignInRequestDTO } from "../adapters/SignInRequestDTO";
import { IP } from "./ApiBase";
import axios from "axios";

export async function signIn(payload: SignInRequestDTO): Promise<any> {
  const response = await axios.post(`${IP}/userProfile/login`, {
    username: payload.username,
    senha: payload.senha,
  });
  return response.data.data;
}
