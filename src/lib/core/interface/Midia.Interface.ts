export interface MidiaAttributes {
  id_midia?: number;
  titulo: string;
  id_legenda: number;
  id_genero_media: number;
  id_tipo_media: number;
  duracao: string;
  arquivo: string;
  id_formato_media: number;
  tamanho: string;
  data: string;
  id_perfil_usuario?: string | null;
  estado: boolean;
}
