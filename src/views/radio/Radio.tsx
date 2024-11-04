import React, { useState } from "react";
import StationList from "./components/StationList";
import RadioPlayer from "./components/RadioPlayer";
import { radioStationsData } from "./components/stations";

const Radio: React.FC = () => {
  const [currentStation, setCurrentStation] = useState(radioStationsData[0]);

  const handleStationSelect = (station: any) => {
    setCurrentStation(station);
  };

  return (
    <>
      <div className="flex px-16 h-[38rem] gap-4 justify-between pt-8">
        <RadioPlayer
          streamUrl={currentStation.src}
          stationName={currentStation.title}
          imageUrl={currentStation.image}
        />
        <StationList
          stations={radioStationsData}
          onStationSelect={handleStationSelect}
        />
      </div>
    </>
  );
};

export default Radio;
