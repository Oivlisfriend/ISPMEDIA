import ListItems from "./ListItems";
import { FiMoreVertical } from "react-icons/fi";
import { PlaylistViewProps } from "^/lib/core/viewModels/PlaylistViewModel";
import { observer } from "mobx-react";
import { GroupViewProps } from "^/lib/core/viewModels/GroupViewModel";
import SharePlaylistModal, {
  PopUpGroup,
} from "^/lib/component/SharePlaylistModal";
import { useState } from "react";

// import { Container } from './styles';
type props = { listItem: string } & Partial<PlaylistViewProps> &
  Partial<GroupViewProps>;
const MainGroup = observer(({ viewPlaylist, viewGroup, listItem }: props) => {
  const [isVisibleUserListModal, setIsVisibleUserListModal] = useState(false);
  const [editingName, setEditingName] = useState(false);
  const [alterPrivilege, setAlterPrivilege] = useState(false);

  const toggleUserListModal = () => {
    setIsVisibleUserListModal(!isVisibleUserListModal);
  };
  const handleEditNameClick = () => {
    setEditingName(!editingName); // Ao clicar em editar nome, muda para modo de edição
  };
  const handleAlterPrivilege = () => {
    setAlterPrivilege(!alterPrivilege); // Ao clicar em editar nome, muda para modo de edição
  };
  const handleKeyDown = async (event: { key: string }) => {
    if (event.key === "Enter") {
      setEditingName(false);
      await viewPlaylist?.updatePlaylistName(); // Função para atualizar o nome da playlist
    }
  };

  return (
    <main className="flex flex-row w-full pb-3">
      <div className="flex flex-col w-full">
        <div className="flex flex-row gap-3 pt-3">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center">
              {typeof viewPlaylist?.playlistMidia.length === "number" &&
                viewPlaylist?.playlistMidia.length > 0 &&
                listItem === "Playlists" && (
                  <div className=" flex flex-row gap-4">
                    <div className="flex justify-between w-auto items-center justify-center ">
                      {editingName ? (
                        <input
                          type="text"
                          className="text-2xl font-bold focus:outline-none w-auto bg-zinc-800"
                          defaultValue={viewPlaylist.namePlaylist}
                          onChange={(e) =>
                            (viewPlaylist.namePlaylist = e.target.value)
                          }
                          onKeyDown={handleKeyDown}
                        />
                      ) : (
                        <span className="text-[#181414] text-sm  text-center  rounded-2xl p-2 bg-white  font-bold">
                          {viewPlaylist.namePlaylist}
                        </span>
                      )}
                      <button onClick={viewPlaylist.toggleSharePlaylist}>
                        <FiMoreVertical className="text-lg" />
                      </button>
                      {viewPlaylist.isVisibleSharePlaylist && (
                        <SharePlaylistModal
                          viewPlaylist={viewPlaylist}
                          viewGroup={viewGroup}
                        />
                      )}
                      {isVisibleUserListModal && (
                        <div className="w-96 p-6 absolute ml-32 mt-[500px] z-20 bg-[#1C1C1C] text-white rounded-lg shadow-lg">
                          <h2 className="text-xl font-bold mb-4">
                            Usuários da Playlist
                          </h2>
                          <ul className="divide-y divide-gray-200">
                            {viewPlaylist.playlistUsers.map((user) => (
                              <li className="py-2 flex justify-between items-center">
                                <span>{user.perfil_usuario?.username}</span>
                                <div className="flex gap-2">
                                  {alterPrivilege ? (
                                    <div className="flex flex-row justify-center items-center gap-1">
                                      <span
                                        className="text-red-600"
                                        onClick={handleAlterPrivilege}
                                      >
                                        X
                                      </span>
                                      <select className="bg-zinc-800 text-white p-2 rounded">
                                        <option value="admin">Admin</option>
                                        <option value="editor">Editor</option>
                                        <option value="viewer">Viewer</option>
                                      </select>
                                    </div>
                                  ) : (
                                    <button
                                      className="btn-edit text-zinc-600 hover:text-zinc-200"
                                      onClick={handleAlterPrivilege}
                                    >
                                      Alterar Privilégio
                                    </button>
                                  )}
                                  <button className="btn-delete text-red-900 hover:text-red-600">
                                    Remover
                                  </button>
                                </div>
                              </li>
                            ))}
                            {viewGroup?.groupUsers.map((user) => (
                              <li className="py-2 flex justify-between items-center">
                                <span>{user.perfil_usuario?.username}</span>
                                <div className="flex gap-2">
                                  {alterPrivilege ? (
                                    <div className="flex flex-row justify-center items-center gap-1">
                                      <span
                                        className="text-red-600"
                                        onClick={handleAlterPrivilege}
                                      >
                                        X
                                      </span>
                                      <select className="bg-zinc-800 text-white p-2 rounded">
                                        <option value="admin">Admin</option>
                                        <option value="editor">Editor</option>
                                        <option value="viewer">Viewer</option>
                                      </select>
                                    </div>
                                  ) : (
                                    <button
                                      className="btn-edit text-zinc-600 hover:text-zinc-200"
                                      onClick={handleAlterPrivilege}
                                    >
                                      Alterar Privilégio
                                    </button>
                                  )}
                                  <button className="btn-delete text-red-900 hover:text-red-600">
                                    Remover
                                  </button>
                                </div>
                              </li>
                            ))}
                          </ul>
                          <button
                            className="bg-red-600  text-white px-4 py-2 rounded ml-2 flex-1"
                            onClick={toggleUserListModal}
                          >
                            Fechar
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-4">
                      <button
                        className="btn-edit text-zinc-600 hover:text-zinc-200"
                        onClick={handleEditNameClick}
                      >
                        Editar Nome
                      </button>
                      <button
                        className="btn-edit text-zinc-600 hover:text-zinc-200 "
                        onClick={toggleUserListModal}
                      >
                        Editar Usuários
                      </button>
                      <button
                        className="btn-delete text-red-900 hover:text-red-600"
                        onClick={() => viewPlaylist.deletePlaylistUsuario()}
                      >
                        Deletar Playlist
                      </button>
                    </div>
                  </div>
                )}
              {typeof viewGroup?.groupMidia.length === "number" &&
                viewGroup?.groupMidia.length > 0 &&
                listItem === "Grupos" && (
                  <div className=" flex flex-row gap-4">
                    <div className="flex justify-between w-auto items-center justify-center ">
                      {editingName ? (
                        <input
                          type="text"
                          className="text-2xl font-bold focus:outline-none w-auto bg-zinc-800"
                          defaultValue={viewGroup.nameGroup}
                          onChange={(e) =>
                            (viewGroup.nameGroup = e.target.value)
                          }
                          onKeyDown={handleKeyDown}
                        />
                      ) : (
                        <span className="text-[#181414] text-sm  text-center  rounded-2xl p-2 bg-white  font-bold">
                          {viewGroup.nameGroup}
                        </span>
                      )}
                      <button onClick={viewGroup.toggleShareGroup}>
                        <FiMoreVertical className="text-lg" />
                      </button>
                      {viewGroup.isVisibleShareGroup && (
                        <PopUpGroup viewGroup={viewGroup} />
                      )}
                      {isVisibleUserListModal && (
                        <div className="w-96 p-6 absolute ml-32 mt-[500px] z-20 bg-[#1C1C1C] text-white rounded-lg shadow-lg">
                          <h2 className="text-xl font-bold mb-4">
                            Usuários da Playlist
                          </h2>
                          <ul className="divide-y divide-gray-200">
                            {viewGroup.groupUsers.map((user) => (
                              <li className="py-2 flex justify-between items-center">
                                <span>{user.perfil_usuario?.username}</span>
                                <div className="flex gap-2">
                                  {alterPrivilege ? (
                                    <div className="flex flex-row justify-center items-center gap-1">
                                      <span
                                        className="text-red-600"
                                        onClick={handleAlterPrivilege}
                                      >
                                        X
                                      </span>
                                      <select className="bg-zinc-800 text-white p-2 rounded">
                                        <option value="admin">Admin</option>
                                        <option value="editor">Editor</option>
                                        <option value="viewer">Viewer</option>
                                      </select>
                                    </div>
                                  ) : (
                                    <button
                                      className="btn-edit text-zinc-600 hover:text-zinc-200"
                                      onClick={handleAlterPrivilege}
                                    >
                                      Alterar Privilégio
                                    </button>
                                  )}
                                  <button className="btn-delete text-red-900 hover:text-red-600">
                                    Remover
                                  </button>
                                </div>
                              </li>
                            ))}
                          </ul>
                          <button
                            className="bg-red-600  text-white px-4 py-2 rounded ml-2 flex-1"
                            onClick={toggleUserListModal}
                          >
                            Fechar
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-4">
                      <button
                        className="btn-edit text-zinc-600 hover:text-zinc-200"
                        onClick={handleEditNameClick}
                      >
                        Editar Nome
                      </button>
                      <button
                        className="btn-edit text-zinc-600 hover:text-zinc-200 "
                        onClick={toggleUserListModal}
                      >
                        Editar Usuários
                      </button>
                      <button
                        className="btn-delete text-red-900 hover:text-red-600"
                        onClick={() => viewGroup?.deleteGroupUsuario()}
                      >
                        Deletar Grupo
                      </button>
                    </div>
                  </div>
                )}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {listItem === "Grupos"
                ? viewGroup?.groupMidia.map((item: any) => (
                    <ListItems playlist={item.midia?.titulo} selected={true} />
                  ))
                : viewPlaylist?.playlistMidia.map((item: any) => (
                    <ListItems playlist={item.midia?.titulo} selected={true} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
});

export default MainGroup;
