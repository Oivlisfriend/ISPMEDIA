import React, { useEffect, useState } from "react";
import TipoMidiasViewModel from "^/lib/core/viewModels/TipoMidiasViewModel";
import { TipoMidiaDTO } from "^/lib/core/adapters/AdaptersDTO";

type props = {
  setSelect: any;
  selected: string;
};

const Filters = ({ setSelect, selected }: props) => {
  const [list, setList] = useState<TipoMidiaDTO[]>([]);
  useEffect(() => {
    (async () => {
      await TipoMidiasViewModel.listar();
      setList(TipoMidiasViewModel.ListaTipos);
    })();
  }, []);
  return (
    <header className="flex  items-start gap-4">
      <div>
        {selected === "Todos" ? (
          <button
            type="button"
            className="bg-amber-100 text-black px-8 py-2 rounded-3xl"
            onClick={() => {
              setSelect("Todos");
            }}
          >
            {"Todos"}
          </button>
        ) : (
          <button
            type="button"
            className="black-600 px-8 py-2 rounded-3xl"
            onClick={() => {
              setSelect("Todos");
            }}
          >
            {"Todos"}
          </button>
        )}
      </div>

      {list?.map((item) => (
        <div key={item.id_tipo_media}>
          {selected === item.nome ? (
            <button
              type="button"
              className="bg-amber-100 text-black px-8 py-2 rounded-3xl"
              onClick={() => {
                setSelect(item.nome);
              }}
            >
              {item.nome}
            </button>
          ) : (
            <button
              type="button"
              className="black-600 px-8 py-2 rounded-3xl"
              onClick={() => {
                setSelect(item.nome);
              }}
            >
              {item.nome}
            </button>
          )}
        </div>
      ))}
    </header>
  );
};

export default Filters;
