import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { ImFilePlay } from "react-icons/im";
import { GrGroup } from "react-icons/gr";
import { CgPlayListSearch } from "react-icons/cg";

import foto from "^/lib/assets/foto2.png";
import {
  GroupUserDTO,
  PlaylistMidiaDTO,
} from "^/lib/core/adapters/AdaptersDTO";
import { GroupViewProps } from "^/lib/core/viewModels/GroupViewModel";
import { PlaylistViewProps } from "^/lib/core/viewModels/PlaylistViewModel";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";

type props = {
  title: string;
  setListItems?: any;
} & Partial<GroupViewProps> &
  Partial<PlaylistViewProps>;

type PropsSelected = {
  selected?: string;
  setSelected?: any;
};

const SidebarComponent = observer(
  ({ title, viewGroup, viewPlaylist, setListItems }: props) => {
    const navigate = useNavigate();
    const getCurrentRoute = () => {
      const pathname = window.location.pathname;
      const name = pathname.split("/").pop();
      return { name };
    };
    const navigation = {
      getCurrentRoute,
    };

    return (
      <nav className="p-4 mb-4 black-600 rounded-3xl">
        <ul>
          <li className="p-1 font-medium">
            <a href="#home">{title}</a>
          </li>
          {viewGroup?.group.map((item: GroupUserDTO) => (
            <li
              className="p-1 hover:text-gray-600 font-light"
              key={item.id_grupo}
            >
              <button
                onClick={() => {
                  viewGroup?.openGroup(
                    item.id_grupo,
                    navigation, // Pass the mock navigation object
                    navigate // Pass the navigate function
                  );
                  setListItems("Grupos");
                }}
              >
                {item.grupo?.nome}
              </button>
            </li>
          ))}
          {viewPlaylist?.playlist.map((item: PlaylistMidiaDTO) => (
            <li
              className="p-1 hover:text-gray-600 font-light"
              key={item.id_playlist}
            >
              <button
                onClick={() => {
                  viewPlaylist?.openPlaylist(
                    item.id_playlist,
                    navigation, // Pass the mock navigation object
                    navigate
                  );
                  setListItems("Playlists");
                }}
              >
                {item.playlist?.nome}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
);

const SidebarComponentDashboard = ({
  selected,
  setSelected,
}: PropsSelected) => {
  return (
    <nav className="flex flex-col py-4 gap-8">
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
              <a href="#Painel" className="text-red-600">
                Painel
              </a>
            </>
          ) : (
            <>
              <MdSpaceDashboard size={24} color="white" />
              <a href="#Painel">Painel</a>
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
              <a href="#Conteúdo" className="text-red-600">
                Conteúdo
              </a>
            </>
          ) : (
            <>
              {" "}
              <ImFilePlay size={24} color="white" />
              <a href="#Conteúdo">Conteúdo</a>
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
              <a href="#Grupos" className="text-red-600">
                Grupos
              </a>
            </>
          ) : (
            <>
              <GrGroup size={24} color="white" />
              <a href="#Grupos">Grupos</a>
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
              <a href="#Playlists" className="text-red-600">
                Playlists
              </a>
            </>
          ) : (
            <>
              <CgPlayListSearch size={24} color="white" />
              <a href="#Playlists">Playlists</a>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export { SidebarComponent, SidebarComponentDashboard };
