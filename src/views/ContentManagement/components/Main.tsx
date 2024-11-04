import React, { useState } from "react";
import PanelComponents from "./Painel/PanelComponents";
import ContentComponents from "./Content/ContentComponents";
import Grupos from "./Grupos/Grupos";
import Playlists from "./Playlists/Playlists";
import Edit from "./Edit";
import { observer } from "mobx-react";
import { MidiaViewProps } from "^/lib/core/viewModels/MidiaViewModel";
import UploadVideo from "./Content/Components/UploadVideo/UploadVideo";

const Main = ({ selected, setSelected, midiaModel }: MidiaViewProps) => {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4 w-screen">
      {selected === "Painel" ? (
        <PanelComponents setIsOpen={setIsOpen} open={open}/>
      ) : selected === "Conteudo" ? (
        <ContentComponents
          setIsOpen={setIsOpen}
          open={open}
          midiaModel={midiaModel}
          setSelected={setSelected}
        />
      ) : selected === "Grupos" ? (
        <Grupos setSelected={setSelected} />
      ) : selected === "Playlists" ? (
        <Playlists setSelected={setSelected} />
      ) : (
        <Edit midiaModel={midiaModel} />
      )}

      {open && <UploadVideo setIsOpen={setIsOpen} midiaModel={midiaModel} />}
    </div>
  );
};

export default observer(Main);
