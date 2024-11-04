import { makeAutoObservable } from "mobx";
import {
  getUserProfileData,
  setUserProfileDate,
  clearUserProfileData,
} from "../../context/DataStorage";
import { signIn } from "../../api/AuthApi";
import {
  GroupUserDTO,
  UserProfileDTO,
  PlaylistMidiaDTO,
} from "../../adapters/AdaptersDTO";
import { UserAttributes } from "../../interface/User.Interface";
import { userAPI } from "../../api/User.API";
import { userProfileApi } from "../../api/UserProfile.Api";
import { UserProfile } from "../../interface/UserProfile.Interface";
import { GrupoAttributes } from "../../interface/Grupo.Interface";

export enum AuthStep {
  SignIn,
  TwoFactorAuthentication,
  SignUp,
}
export type AuthViewProps = {
  viewModel: AuthViewModel; // Usamos o AccountViewModel definido abaixo
};
class AuthViewModel {
  [x: string]: any;
  private _username: string = "";
  private _avatar: string = "";
  private _bio: string = "";
  private _senha: string = "";
  private _email: string = "";
  private _nome: string = "";
  private _sobrenome: string = "";
  private UserProfile: UserProfileDTO | null = null;
  group: GroupUserDTO[] = [];
  playlist: PlaylistMidiaDTO[] = [];
  payloadGroup: GrupoAttributes = {};
  isShowModalGroup: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.verifyLogin();
  }
  get getSenha(): string {
    return this._senha;
  }

  get getUsername(): string {
    return this._username;
  }

  get getEmail(): string {
    return this._email;
  }

  get getAvatar(): string {
    return this._avatar;
  }

  get getBio(): string {
    return this._bio;
  }
  get getNome(): string {
    return this._nome;
  }
  get getSobrenome(): string {
    return this._sobrenome;
  }

  get getUserProfile(): UserProfileDTO | null {
    return this.UserProfile;
  }

  setNome(nome: string) {
    this._nome = nome;
  }
  setSobrenome(sobrenome: string) {
    this._sobrenome = sobrenome;
  }
  setUsername(username: string) {
    this._username = username;
  }

  setSenha(senha: string) {
    this._senha = senha;
  }

  setEmail(email: string) {
    this._email = email;
  }

  setAvatar(avatar: string) {
    this._avatar = avatar;
  }

  setBio(bio: string) {
    this._bio = bio;
  }

  setUserProfile(userProfile: UserProfileDTO) {
    this.UserProfile = userProfile;
  }

  async verifyLogin() {
    const user = await getUserProfileData();
    if (user) {
      this.setUserProfile(user);
    }
  }
  get getIsShowModalGroup() {
    return this.isShowModalGroup;
  }
  set getIsShowModalGroup(value: boolean) {
    this.isShowModalGroup = value;
  }
  async endSession() {
    await clearUserProfileData();
    window.location.reload();
  }
  toggleModal = () => {
    this.isShowModalGroup = !this.isShowModalGroup;
  };

  async signIn(navigate: (arg0: string) => void) {
    const payload = {
      username: this.getUsername,
      senha: this.getSenha,
    };
    try {
      const response: UserProfileDTO = await signIn(payload);
      console.log("sign in response", response);
      if (!response.username) {
        return;
      }

      this.UserProfile = response;
      await setUserProfileDate(this.UserProfile);
      navigate("/");
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  }
  addProfileUser = async (id: number, navigate: (arg0: string) => void) => {
    try {
      const payloadProfile: UserProfile = {
        username: this.getUsername,
        senha: this.getSenha,
        email: this.getEmail,
        id_usuario: id,
      };
      const responseProfile = await userProfileApi.created(payloadProfile);
      console.log("Criou");
      if (!responseProfile) return;
      console.log("Perfil de Usuario criado com sucesso!", responseProfile);
      navigate("/");
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  };
  signUp = async (navigate: (arg0: string) => void) => {
    const payloadUser: UserAttributes = {
      nome: this.getNome,
      email: this.getEmail,
      sobrenome: this.getSobrenome,
      password: "Angola123",
    };
    try {
      const responseUser = await userAPI.created(payloadUser);
      console.log("Usuario criado com sucesso!", responseUser);
      if (!responseUser) {
        return;
      }

      await this.addProfileUser(responseUser.id_usuario, navigate);
    } catch (error: any) {
      if (error.message !== "Invalid code") {
        console.log(error.message);
      }
    }
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthViewModel();
