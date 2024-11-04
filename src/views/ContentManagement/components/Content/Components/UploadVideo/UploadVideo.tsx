import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import MainUpload from "./Components/MainUpload";
import DetailsUpload from "./Components/DetailsUpload";
import { MidiaViewProps } from "^/lib/core/viewModels/MidiaViewModel";
import { observer } from "mobx-react";
import GeneroViewModel from "^/lib/core/viewModels/GeneroViewModel";
import TipoMidiasViewModel from "^/lib/core/viewModels/TipoMidiasViewModel";

const UploadVideo = ({ midiaModel, setIsOpen }: MidiaViewProps) => {
  const [statusUpload, setStatusUpload] = useState("MainUpload");
  return (
    <div className="absolute left-0  top-0 w-full h-full flex justify-center bg-opacity-70 bg-black">
      <div className=" w-[40%]  h-[80%] black-600 flex flex-col rounded-xl mt-4">
        <div className="flex flex-row justify-between px-4 py-2 border-b-2">
          <span>Enviar Video</span>
          <MdOutlineClose
            size={24}
            onClick={() => setIsOpen && setIsOpen(false)}
          />
        </div>
        {statusUpload === "MainUpload" ? (
          <MainUpload
            setStatusUpload={setStatusUpload}
            midiaModel={midiaModel}
          />
        ) : (
          <DetailsUpload
            midiaModel={midiaModel}
            TipoMidiaView={TipoMidiasViewModel}
            viewGenero={GeneroViewModel}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </div>
  );
};

export default observer(UploadVideo);
