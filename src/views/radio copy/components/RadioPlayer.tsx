// src/RadioPlayer.js
import React, { useState, useRef, useEffect } from "react";
import { MdPauseCircleOutline, MdPlayCircleOutline } from "react-icons/md";

const RadioPlayer = ({ streamUrl, stationName, imageUrl }: any) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<any>();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = streamUrl;
      if (playing) {
        audioRef.current.play().catch((error: any) => {
          console.error("Erro ao reproduzir o áudio:", error);
          setPlaying(false);
        });
      }
    }
  }, [streamUrl, playing]);

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error: any) => {
        console.error("Erro ao reproduzir o áudio:", error);
        setPlaying(false);
      });
    }
    setPlaying(!playing);
  };

  return (
    <div className="w-[70%] h-[85%] flex flex-col gap-4 rounded-xl border-2 border-red-600 p-4 items-center justify-center">
      <audio ref={audioRef} />
      <h1 className="text-2xl font-bold">{stationName}</h1>
      <img
        src={imageUrl}
        alt=""
        className="w-[25%] h-[30%] bg-cover rounded-3xl"
      />
      <button
        onClick={togglePlay}
        className="w-[25%] flex flex-col gap-4 items-center"
      >
        {playing ? (
          <MdPauseCircleOutline size={96} />
        ) : (
          <MdPlayCircleOutline size={96} />
        )}
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default RadioPlayer;
