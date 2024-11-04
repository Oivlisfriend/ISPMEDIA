export interface NotificationAtributtes {
  id_notificacao?: number;
  id_perfil_usuario: number;
  mensagem: string;
  data_envio: Date;
  destino: number;
  tipo: string;
}
