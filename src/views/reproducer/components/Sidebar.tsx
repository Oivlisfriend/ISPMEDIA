import { MidiaView } from "^/lib/core/viewModels/MidiaViewModel";
import React from "react";
import { observer } from "mobx-react";
type PropsStations = {
  freq: string;
  title: string;
  src: string;
  country: string;
  genre: string;
  image: string;
};

type Props = {
  stations: PropsStations[];
};

const ReprocucerList = observer(({ midiaView }: MidiaView) => {
  return (
    <div className="flex flex-col gap-4 w-[25%]  h-[30rem] px-2 mt-[-10px]">
      <span className="font-bold text-2xl">Lista de Reprodução</span>
      <ul className="overflow-y-scroll">
        {midiaView.listMidias?.map((station, index) => (
          <li
            onClick={() =>
              midiaView.reproduceMidia(station.arquivo, station.id_midia)
            }
            key={index}
            className={`${
              station.arquivo === midiaView.reprocudeNow ? "bg-[#040707]" : ""
            } flex gap-2 cursor-pointer hover:bg-[#040707] p-4 w-full`}
          >
            <img
              src={`data:image/*;base64,${station.imagem}`}
              alt=""
              className="w-[35%] h-[30%]  rounded-2xl"
            />
            <div className="flex flex-col gap-2 w-full">
              <span className="font-bold"> {station.titulo}</span>
              <div className="flex flex-row">
                <span> {station.comentarios} </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ReprocucerList;
