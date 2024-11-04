import React from "react";
import Tables from "../Content/Components/Tables";
import Filtro from "../Content/Components/Filtro";
import image from "^/lib/assets/foto2.png";

// import { Container } from './styles';
type PropsContent = {
  video: string;
  visibilidade: string;
  data: string;
  visualizcoes: string;
  comentarios: string;
  gostos: string;
  image: any;
};

type PropsPlaylists = {
  setSelected?: (status: string) => void;
};

const Playlists = ({ setSelected }: PropsPlaylists) => {
  const title = [
    "Videos",
    "Visibilidade",
    "data",
    "visualizcoes",
    "comentarios",
    "gostos",
  ];
  const content: PropsContent[] = [
    {
      video: "Jogoss - SZA KIller Bean",
      visibilidade: "Privado",
      data: "15/1/2024",
      visualizcoes: "3 mill",
      comentarios: "100",
      gostos: "3 X 5",
      image: image,
    },
    {
      video: "Jogoss - SZA KIller Bean",
      visibilidade: "Privado",
      data: "15/1/2024",
      visualizcoes: "3 mill",
      comentarios: "100",
      gostos: "3 X 5",
      image: image,
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-40 items-center">
        <h1 className="font-medium">Minhas Playlists</h1>
        <span className="px-8 py-1 bg-red-700 rounded-xl hover:bg-red-800">
          Adicionar
        </span>
      </div>
      <Filtro />
      <Tables setSelected={setSelected}  />
    </div>
  );
};

export default Playlists;
