import React from "react";
import Sidebar from "^/lib/component/Sidebar/Sidebar";
import MainHome from "^/lib/component/MainHome/MainHome";
import "./stylecss.css";
import { observer } from "mobx-react";
import { MidiaViewProps } from "^/lib/core/viewModels/MidiaViewModel";
import { AuthViewProps } from "^/lib/core/viewModels/auth/authViewModel";
import { GroupAndPlaylistProps } from "^/views/group/view/Group";
type props = {} & GroupAndPlaylistProps & AuthViewProps & MidiaViewProps;
const Home = ({ midiaModel, viewModel, viewGroup, viewPlaylist }: props) => {
  return (
    <div className=" max-w-screen w-full h-screen overflow-hidden flex gap-8">
      <Sidebar viewGroup={viewGroup} viewPlaylist={viewPlaylist} type="" />
      <MainHome midiaModel={midiaModel} />
    </div>
  );
};

export default observer(Home);
