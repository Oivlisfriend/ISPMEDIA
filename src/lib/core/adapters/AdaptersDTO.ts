export type UserDTO = {
  id_usuario?: number;
  nome?: string;
  sobrenome?: string;
  senha?: string;
  email?: string;
};

export type UserProfileDTO = {
  id_perfil_usuario?: number;
  id_usuario?: number | string;
  username?: string;
  avatar?: string;
  bio?: string;
  user?: {
    nome: string;
    sobrenome: string;
  };
};

export type TipoMidiaDTO = {
  id_tipo_media: number;
  nome: string;
};

export type PlaylistDTO = {
  id_playlist?: number;
  nome?: string;
  data?: string;
  visibilidade?: string;
  estado?: boolean;
  playlist?: {
    nome: string;
  };
};
export type PlaylistUsuaioDTO = {
  id_playlist_usuario?: number;
  id_perfil_usuario?: number;
  id_playlist?: number;
  perfil_usuario?: {
    username: string;
  };
  playlist?: {
    nome: string;
  };
};

export type PlaylistMidiaDTO = {
  id_playlist_media?: number;
  id_midia?: number;
  id_perfil_usuario?: number;
  id_playlist?: number;
  playlist?: {
    nome: string;
  };
  midia?: {
    titulo: string;
  };
};

export type PartilhaDTO = {
  id_partilha?: number;
  id_midia?: number | string;
  id_receptor_usuario?: number | string;
  id_usuario?: number | string;
  data?: Date;
};

export type NotificationsDTO = {
  id_notificacao?: number;
  id_perfil_usuario?: number | string;
  mensagem?: string;
  data_envio?: Date;
  destino?: number;
  tipo?: string;
};

export type notificatioVisualizerDTO = {
  id_notificacao_visualizacao?: number;
  id_perfil_usuario?: number | string;
  data_visualizacao?: Date;
  id_notificacao?: number | string;
};

export type FormatoMediaDTO = {
  id_formato_media: number;
  nome: string;
};

export type MidiaDTO = {
  id_midia: number;
  titulo: string;
  id_legenda: number;
  id_genero_media: number;
  id_tipo_media: number;
  duracao: string;
  arquivo: string;
  formato_media: string;
  tamanho: string;
  data: string;
  id_perfil_usuario: number;
  estado: boolean;
  imagem: string;
  perfilUsuario?: UserProfileDTO;
  legenda?: LegendasDTO;
  generoMedia?: GeneroDTO;
  tipoMedia?: TipoMidiaDTO;
  gostos?: number;
  comentarios?: number;
  descricao: string;
  visibilidade: string;
};

export type MidiaCompositorDTO = {
  id_midia_compositor?: number | string;
  id_midia?: number;
  id_compositor?: number;
  id_artista?: number;
};
export type MidiaArtistaDTO = {
  id_midia_artista?: number;
  id_midia?: number;
  id_artista?: number;
};
export type MidiaAlbumDTO = {
  id_midia_album?: number;
  id_midia?: number;
  id_album?: number;
};
export type LegendasDTO = {
  id_legendas?: number;
  arquivo?: string;
  estado?: string;
};

export type GroupMidiaDTO = {
  id_grupo_media?: number;
  id_grupo?: number;
  id_media?: number;
  grupo?: {
    nome: string;
  };
  midia?: {
    titulo: string;
  };
};

export type GroupUserDTO = {
  id_grupo_usuario?: number;
  id_grupo?: number;
  id_perfil_usuario?: number;
  data_entrada: string;
  id_papel_usuario_grupo: number;
  grupo?: {
    nome: string;
  };
  perfil_usuario?: {
    username: string;
  };
};

export type GroupDTO = {
  id_grupo?: number;
  nome?: string;
  estado?: string;
  tipo?: string;
};

export type GeneroDTO = {
  id_genero_media?: number;
  nome?: string;
};

export type EditoraDTO = {
  id_editora?: number;
  nome?: string;
};

export type CriticaDTO = {
  id_critica?: number;
  descricao?: string;
  id_perfil_usuario?: number;
  id_midia?: number;
};

export type CompositorDTO = {
  id_compositor?: number;
  nome?: string;
};

export type ArtistaDTO = {
  id_artista?: number;
  nome?: string;
  biografia?: string | null;
  imagem?: string | null;
  id_editora?: number;
};

export type AlbumDTO = {
  id_album?: number;
  titulo?: string;
  data_lancamento?: Date;
  capa?: string;
};
