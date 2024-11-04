import React from "react";
import Sidebar from "^/lib/component/Sidebar/Sidebar";
import MainHome from "../components/MainHome";
import { observer } from "mobx-react";
import { AuthViewProps } from "^/lib/core/viewModels/auth/authViewModel";
import { GroupAndPlaylistProps } from "^/views/group/view/Group";
type props = {} & GroupAndPlaylistProps & AuthViewProps;
const AlbumDetails = observer(
  ({ viewModel, viewGroup, viewPlaylist }: props) => {
    return (
      <>
        <div className="flex gap-8">
          <Sidebar viewGroup={viewGroup} viewPlaylist={viewPlaylist} type="" />
          <MainHome />
        </div>
      </>
    );
  }
);

export default AlbumDetails;
