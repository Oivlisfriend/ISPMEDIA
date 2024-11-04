import React, { useState } from "react";
import Menu from "./Components/Menu";
import Filtro from "./Components/Filtro";
import Tables from "./Components/Tables";
import { MidiaViewProps } from "^/lib/core/viewModels/MidiaViewModel";

const ContentComponents = ({
  setIsOpen,
  midiaModel,
  selected,
  setSelected,
}: MidiaViewProps) => {
  const [selectedMenu, setSelectedMenu] = useState("Videos");
  return (
    <div className="flex gap-3 flex-wrap w-full max-h-screen  overflow-y-auto scroll-transparent">
      <h1 className="font-medium">Conteúdo do canal</h1>
      <Menu
        selected={selectedMenu}
        setSelected={setSelectedMenu}
        setIsOpen={setIsOpen}
      />
      <Filtro />
      {selectedMenu === "Videos" ? (
        <Tables
          setIsOpen={setIsOpen}
          midiaModel={midiaModel}
          setSelected={setSelected}
        />
      ) : (
        <Tables />
      )}
    </div>
  );
};

export default ContentComponents;
