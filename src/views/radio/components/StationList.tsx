import React from "react";

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
  onStationSelect: any;
};

const StationList = ({ stations, onStationSelect }: Props) => {
  return (
    <div className="flex flex-col gap-4 w-[25%] h-[85%] px-2 mt-[-10px]">
      <span className="font-bold text-2xl">Lista de Estações</span>
      <ul className="overflow-y-scroll">
        {stations.map((station, index) => (
          <li
            key={index}
            onClick={() => onStationSelect(station)}
            className="flex gap-2 hover:bg-[#040707] p-4 w-full"
          >
            <img
              src={station.image}
              alt=""
              className="w-[35%] h-[30%]  rounded-2xl"
            />
            <div className="flex flex-col gap-2 w-full">
              <span className="font-bold"> {station.title}</span>
              <div className="flex flex-row">
                <span>
                  {" "}
                  {station.freq} -<span> {station.genre}</span>{" "}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StationList;
