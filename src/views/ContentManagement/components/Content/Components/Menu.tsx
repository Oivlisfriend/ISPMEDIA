import React from "react";

// import { Container } from './styles';

type Props = {
  selected?: string;
  setSelected: any;
  setIsOpen?: (status: boolean) => void;
};

const Menu = ({ selected, setSelected, setIsOpen }: Props) => {
  return (
    <div className="flex flex-row gap-12 w-full border-b-2 py-1">
      {selected === "Videos" ? (
        <span
          onClick={() => setSelected("Videos")}
          className="text-red-700 border-b-4 border-red-700 font-bold"
        >
          Videos
        </span>
      ) : (
        <span onClick={() => setSelected("Videos")}>Videos</span>
      )}
      {selected === "Musicas" ? (
        <span
          onClick={() => setSelected("Musicas")}
          className="text-red-700 border-b-4 border-red-700 font-bold"
        >
          Musicas
        </span>
      ) : (
        <span onClick={() => setSelected("Musicas")}>Musicas</span>
      )}
      <span
        className="px-8 py-1 bg-red-700 rounded-xl hover:bg-red-800"
        onClick={() => setIsOpen && setIsOpen(true)}
      >
        Adicionar
      </span>
    </div>
  );
};

export default Menu;
