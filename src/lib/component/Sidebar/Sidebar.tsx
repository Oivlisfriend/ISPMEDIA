import {
  SidebarComponent,
  SidebarComponentDashboard,
} from "~/component/SidebarComponent/SidebarComponent";
import ModelGroup from "~/component/Sidebar/components/ModalGroup";
import playlistImage from "~/assets/createPlaylist.png";
import group from "~/assets/createGroup.png";
import { observer } from "mobx-react";
import { GroupViewProps } from "^/lib/core/viewModels/GroupViewModel";
import { PlaylistViewProps } from "^/lib/core/viewModels/PlaylistViewModel";
import ModalPlaylist from "./components/ModalPlaylist";

type props = {
  type: string;
  selected?: string;
  setSelected?: any;
  setListItems?: any;
} & GroupViewProps &
  PlaylistViewProps;

const Sidebar = observer(
  ({
    type,
    selected,
    setSelected,
    viewGroup,
    viewPlaylist,
    setListItems,
  }: props) => {
    return (
      <div className="flex">
        <div
          className=" flex flex-col gap-4 w-64 px-4 pt-2 black-700 text-white transform-translate-x-full
        transition-transform duration-300 ease-in-out md:relative md:translate-x-0"
        >
          {type === "management" ? (
            <SidebarComponentDashboard
              selected={selected}
              setSelected={setSelected}
            />
          ) : (
            <>
              <nav className="p-4 black-600 rounded-3xl font-medium">
                <ul className="flex flex-col gap-2 items-start">
                  <li className="flex justify-center gap-2 items-center">
                    <img src={playlistImage} alt="google" className="w-7 h-7" />
                    <button onClick={viewPlaylist?.toggleModal}>
                      Criar Playlist
                    </button>
                  </li>
                  <li className="flex justify-center gap-2  items-center">
                    <img src={group} alt="google" className="w-7 h-7" />
                    <button onClick={viewGroup?.toggleModal}>
                      Criar Grupo {viewGroup?.isShowModalGroup}
                    </button>
                  </li>
                </ul>
              </nav>
              <SidebarComponent
                title={"Grupos"}
                viewGroup={viewGroup}
                setListItems={setListItems}
              />
              {viewGroup?.isShowModalGroup && (
                <ModelGroup viewGroup={viewGroup} />
              )}
              {viewPlaylist?.isShowModalPlaylist && (
                <ModalPlaylist viewPlaylist={viewPlaylist} />
              )}
              <SidebarComponent
                title={"Playlists"}
                viewPlaylist={viewPlaylist}
                setListItems={setListItems}
              />
            </>
          )}
        </div>
      </div>
    );
  }
);

export default Sidebar;
