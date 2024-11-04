import React, { useState } from "react";
import Sidebar from "^/lib/component/Sidebar/Sidebar";
import MainGroup from "../components/MainGroup";
import { observer } from "mobx-react";
import { PlaylistViewProps } from "^/lib/core/viewModels/PlaylistViewModel";
import { GroupViewProps } from "^/lib/core/viewModels/GroupViewModel";
// import { Container } from './styles';
export type GroupAndPlaylistProps = {} & PlaylistViewProps & GroupViewProps;
const Group = observer(({ viewPlaylist, viewGroup }: GroupAndPlaylistProps) => {
  const [listItem, setListItems] = useState("");
  return (
    <>
      <div className="flex gap-8">
        <Sidebar
          viewPlaylist={viewPlaylist}
          viewGroup={viewGroup}
          type=""
          setListItems={setListItems}
        />
        <MainGroup
          viewPlaylist={viewPlaylist}
          viewGroup={viewGroup}
          listItem={listItem}
        />
      </div>
    </>
  );
});

export default Group;
