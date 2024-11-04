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

type PropsGrupos = {
  setSelected?: (status: string) => void;
};

const Grupos = ({ setSelected }: PropsGrupos) => {
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
      <h1 className="font-medium">Meus Grupos</h1>
      <Filtro />
      <Tables setSelected={setSelected}  />
    </div>
  );
};

export default Grupos;
