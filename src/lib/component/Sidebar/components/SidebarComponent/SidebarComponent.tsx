import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { ImFilePlay } from "react-icons/im";
import { GrGroup } from "react-icons/gr";
import { CgPlayListSearch } from "react-icons/cg";

import foto from "../../../../assets/foto2.png";

// import { Container } from './styles';
type props = {
  titlePlaylist: string;
  playlist: string[];
};

type PropsSelected = {
  selected?: string;
  setSelected?: any;
};

const SidebarComponent = ({ titlePlaylist, playlist }: props) => {
  return (
    <nav className="p-4 mb-4 black-600 rounded-3xl">
      <ul>
        <li className="p-1 font-medium">
          <a href="#home">{titlePlaylist}</a>
        </li>
        {playlist.map((item: string, index: number) => (
          <li className="p-1 hover:text-gray-600 font-light">
            <a href="#sobre">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
const SidebarComponentDashboard = ({
  selected,
  setSelected,
}: PropsSelected) => {
  return (
    <nav className="flex flex-col p-4 mb-4 rounded-3xl gap-8">
      <div className="flex flex-col gap-2 items-center justify-center">
        <img src={foto} alt="" className="rounded-full w-32" />
        <span>Nome canal</span>
      </div>
      <ul className="flex flex-col gap-4">
        <li
          className="flex gap-4 p-1 font-light"
          onClick={() => setSelected("Painel")}
        >
          {selected === "Painel" ? (
            <>
              <MdSpaceDashboard size={24} color="red" />
              <a href="#sobre" className="text-red-600">
                Painel
              </a>
            </>
          ) : (
            <>
              <MdSpaceDashboard size={24} color="white" />
              <a href="#sobre">Painel</a>
            </>
          )}
        </li>
        <li
          className="flex gap-4 p-1 font-light"
          onClick={() => setSelected("Conteudo")}
        >
          {selected === "Conteudo" ? (
            <>
              {" "}
              <ImFilePlay size={24} color="red" />
              <a href="#sobre" className="text-red-600">
                Conteúdo
              </a>
            </>
          ) : (
            <>
              {" "}
              <ImFilePlay size={24} color="white" />
              <a href="#sobre">Conteúdo</a>
            </>
          )}
        </li>
        <li
          className="flex gap-4 p-1 font-light"
          onClick={() => setSelected("Grupos")}
        >
          {selected === "Grupos" ? (
            <>
              <GrGroup size={24} color="red" />
              <a href="#sobre" className="text-red-600">
                Grupos
              </a>
            </>
          ) : (
            <>
              <GrGroup size={24} color="white" />
              <a href="#sobre">Grupos</a>
            </>
          )}
        </li>
        <li
          className="flex gap-4 p-1 font-light"
          onClick={() => setSelected("Playlists")}
        >
          {selected === "Playlists" ? (
            <>
              <CgPlayListSearch size={24} color="red" />
              <a href="#sobre" className="text-red-600">
                Playlists
              </a>
            </>
          ) : (
            <>
              <CgPlayListSearch size={24} color="white" />
              <a href="#sobre">Playlists</a>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export { SidebarComponent, SidebarComponentDashboard };
