import { NotificationAtributtes } from "../interface/Notification.Interface";
import { ApiBase } from "./ApiBase";

class NotificationAPI extends ApiBase<NotificationAtributtes> {
  constructor() {
    super("notifications");
  }
}

export const notificationAPI = new NotificationAPI();
