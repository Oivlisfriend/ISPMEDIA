import React from "react";
import Item from "./Components/Item";
import { observer } from "mobx-react";
import { MidiaViewProps } from "^/lib/core/viewModels/MidiaViewModel";

const PanelComponents = ({ setIsOpen, open }: Partial<MidiaViewProps>) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-medium ">Conteúdo do canal</h1>
      <Item setIsOpen={setIsOpen} open={open} />
    </div>
  );
};

export default observer(PanelComponents);
