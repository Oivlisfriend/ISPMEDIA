import React, { useState } from "react";
import Sidebar from "^/lib/component/Sidebar/Sidebar";
import Main from "./components/Main";
import { observer } from "mobx-react";
import { MidiaViewProps } from "^/lib/core/viewModels/MidiaViewModel";
import { GroupAndPlaylistProps } from "../group/view/Group";
type props = {} & GroupAndPlaylistProps & MidiaViewProps;
const ContentManagement = ({ midiaModel, viewGroup, viewPlaylist }: props) => {
  const [selected, setSelected] = useState("Painel");
  return (
    <div className="fixed max-w-screen w-full h-screen overflow-hidden flex gap-4 px-6">
      <Sidebar
        viewGroup={viewGroup}
        viewPlaylist={viewPlaylist}
        setSelected={setSelected}
        type="management"
      />
      <Main
        selected={selected}
        setSelected={setSelected}
        midiaModel={midiaModel}
      />
    </div>
  );
};

export default observer(ContentManagement);
