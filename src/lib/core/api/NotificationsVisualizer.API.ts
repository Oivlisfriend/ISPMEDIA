import { NotificationsVisualizerAtributtes } from "../interface/NotificatioVisualizer.Interface";
import { ApiBase } from "./ApiBase";

class NotificatioVisualizerAPI extends ApiBase<NotificationsVisualizerAtributtes> {
  constructor() {
    super("notificationsVisualizer");
  }
}

export const notificatioVisualizerAPI = new NotificatioVisualizerAPI();
