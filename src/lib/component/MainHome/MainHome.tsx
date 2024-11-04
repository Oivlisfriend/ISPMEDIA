import React, { useState } from "react";
import Filters from "./Components/Filters";
import ListItems from "./Components/ListItems";
import { MidiaViewProps } from "^/lib/core/viewModels/MidiaViewModel";

const MainHome = ({ midiaModel }: MidiaViewProps) => {
  const [select, setSelect] = useState("Todos");

  return (
    <main className="flex flex-col gap-4  pt-2 w-full">
      <Filters selected={select} setSelect={setSelect} />
      <ListItems selected={select} midiaModel={midiaModel} />
    </main>
  );
};

export default MainHome;
