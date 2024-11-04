import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserProfile } from "../interface/UserProfile.Interface";
import { UserProfileDTO } from "../adapters/AdaptersDTO";

export const setUserProfileDate = async (props: UserProfileDTO) => {
  await AsyncStorage.setItem("userData", JSON.stringify(props));
};

export const getUserProfileData = async (): Promise<UserProfileDTO | null> => {
  const response = await AsyncStorage.getItem("userData");
  if (response !== null) return JSON.parse(response);
  return null;
};

export const clearUserProfileData = async () => {
  await AsyncStorage.removeItem("userData");
};

export const setSessionId = async (sessionId: string) => {
  await AsyncStorage.setItem("sessionId", sessionId);
};

export const getSessionId = async () => {
  return await AsyncStorage.getItem("sessionId");
};
