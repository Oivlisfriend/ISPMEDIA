import React from "react";
import { PlaylistViewProps } from "../core/viewModels/PlaylistViewModel";
import { observer } from "mobx-react";

const AddMidiaView = observer(({ viewPlaylist }: PlaylistViewProps) => {
  return (
    <div className="w-96 p-6 absolute ml-32 mt-[500px] z-50 bg-[#1C1C1C] text-white rounded-lg shadow-lg">
      <h2 className="text-white text-lg mb-4">Partilhar</h2>
    </div>
  );
});

export default AddMidiaView;
