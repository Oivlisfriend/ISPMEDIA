import React from "react";
import { PlaylistViewProps } from "../core/viewModels/PlaylistViewModel";
import { observer } from "mobx-react";
import { GroupViewProps } from "../core/viewModels/GroupViewModel";

const PopUp = observer(
  ({ viewPlaylist, viewGroup }: GroupViewProps & PlaylistViewProps) => {
    return (
      <div className="w-96 p-6 absolute ml-32 mt-[500px] z-20 bg-[#1C1C1C] text-white rounded-lg shadow-lg">
        <h2 className="text-white text-lg mb-4">Partilhar</h2>
        <input
          type="text"
          placeholder="Procurar"
          maxLength={150}
          className="bg-gray-800 text-white p-2 rounded w-full mb-4"
        />
        <div className="max-h-80 overflow-y-auto">
          {viewPlaylist?.users?.map((item) => (
            <div
              key={item.id_perfil_usuario}
              className={`p-2 rounded mb-2 cursor-pointer ${
                viewPlaylist?.listShare.some(
                  (share) =>
                    share.id_perfil_usuario ===
                      Number(item.id_perfil_usuario) &&
                    share.id_playlist ===
                      Number(viewPlaylist?.playlistMidia[0].id_playlist)
                )
                  ? "bg-gray-800"
                  : "bg-transparent"
              }`}
              onClick={() =>
                viewPlaylist?.setListShare(
                  Number(item.id_perfil_usuario),
                  Number(viewPlaylist?.playlistMidia[0].id_playlist)
                )
              }
            >
              <span className="text-white">
                {item.user?.nome} {item.username}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={viewPlaylist?.fetchSharePlaylist}
            className="bg-transparent text-white px-4 py-2 rounded mr-2 flex-1"
          >
            Partilhar
          </button>
          <button
            onClick={() =>
              viewPlaylist?.toggleSharePlaylist() ||
              viewGroup?.toggleShareGroup()
            }
            className="bg-red-600  text-white px-4 py-2 rounded ml-2 flex-1"
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  }
);
export const PopUpGroup = observer(({ viewGroup }: GroupViewProps) => {
  return (
    <div className="w-96 p-6 absolute ml-32 mt-[500px] z-20 bg-[#1C1C1C] text-white rounded-lg shadow-lg">
      <h2 className="text-white text-lg mb-4">Partilhar</h2>
      <input
        type="text"
        placeholder="Procurar"
        maxLength={150}
        className="bg-gray-800 text-white p-2 rounded w-full mb-4"
      />
      <div className="max-h-80 overflow-y-auto">
        {viewGroup?.users?.map((item) => (
          <div
            key={item.id_perfil_usuario}
            className={`p-2 rounded mb-2 cursor-pointer ${
              viewGroup?.listShare.some(
                (share) =>
                  share.id_perfil_usuario === Number(item.id_perfil_usuario) &&
                  share.id_group === Number(viewGroup?.groupMidia[0].id_grupo)
              )
                ? "bg-gray-800"
                : "bg-transparent"
            }`}
            onClick={() =>
              viewGroup?.setListShare(
                Number(item.id_perfil_usuario),
                Number(viewGroup?.groupMidia[0].id_grupo)
              )
            }
          >
            <span className="text-white">
              {item.user?.nome} {item.username}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={viewGroup?.fetchShareGroup}
          className="bg-transparent text-white px-4 py-2 rounded mr-2 flex-1"
        >
          Partilhar
        </button>
        <button
          onClick={() =>
            viewGroup?.toggleShareGroup() || viewGroup?.toggleShareGroup()
          }
          className="bg-red-600  text-white px-4 py-2 rounded ml-2 flex-1"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
});

export default PopUp;
