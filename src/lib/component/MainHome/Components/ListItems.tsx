import React, { useEffect, useState } from "react";
import ItemMedia from "./ItemMedia/ItemMedia";
import { MidiaDTO } from "^/lib/core/adapters/AdaptersDTO";
import { observer } from "mobx-react";
import { MidiaViewProps } from "^/lib/core/viewModels/MidiaViewModel";

const ListItems = ({ selected, midiaModel }: MidiaViewProps) => {
  const [list, setList] = useState<MidiaDTO[]>([]);
  useEffect(() => {
    (async () => {
      if (midiaModel && midiaModel.listMidias) {
        setList(midiaModel.listMidias);
      }
    })();
  }, [midiaModel?.listMidias]);

  return (
    <div className="flex gap-3 flex-wrap w-full h-[80%]  overflow-y-auto scroll-transparent">
      {list.map((item) => {
        if (item.tipoMedia?.nome === selected || selected === "Todos")
          return (
            <div key={item.id_midia}>
              <ItemMedia item={item} midiaView={midiaModel} />
            </div>
          );
      })}
    </div>
  );
};

export default observer(ListItems);
