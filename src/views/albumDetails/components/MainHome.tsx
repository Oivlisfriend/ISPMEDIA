import React from "react";
import ListItems from "./ListItems";
import foto from "~/assets/foto1.png";
import foto2 from "~/assets/foto2.png";

// import { Container } from './styles';

const MainHome: React.FC = () => {
  // const [select, setSelect] = useState("Tudo");
  const items = [
    {
      type: "Musicas",
      title: "Media 1",
      description: "Description for Item 1",
      arquivo: { foto },
      data: "2024-05-30",
    },
    {
      type: "Videos",
      title: "Media 1",
      description: "Description for Item 1",
      arquivo: { foto },
      data: "2024-05-30",
    },
    {
      type: "Playlist",
      title: "Media 1",
      description: "Description for Item 1",
      arquivo: { foto },
      data: "2024-05-30",
    },
    {
      type: "Media",
      title: "Media 1",
      description: "Description for Item 1",
      arquivo: { foto },
      data: "2024-05-30",
    },
    {
      type: "Media",
      title: "Media 1",
      description: "Description for Item 1",
      arquivo: { foto },
      data: "2024-05-30",
    },
    {
      type: "Media",
      title: "Media 2",
      description: "Description for Item 2",
      arquivo: { foto },
      data: "2024-05-30",
    },
    {
      type: "Playlist",
      title: "Playlist",
      description: "Description for Item 2",
      arquivo: { foto },
      data: "2024-05-30",
    },
    {
      type: "Grupos",
      title: "Grupo",
      description: "Description for Item 3",
      arquivo: { foto2 },
      data: "2024-05-30",
    },
  ];

  return (
    <main className="flex flex-row w-full">
      <div className="flex flex-col w-full">
        <div className=" flex flex-col w-full gap-8">
          <div
            className="bg-white bg-cover bg-center w-full h-96"
            style={{ backgroundImage: `url(${foto})` }}
          >
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.6)" }}
            />
          </div>
        </div>

        <div className="flex flex-row gap-3 pt-3">
          <div className="flex flex-col gap-3">
            <span className="text-2xl font-bold ">Popular</span>
            <ListItems items={items} selected={true} />
            <ListItems items={items} selected={false} />
            <ListItems items={items} selected={false} />
            <ListItems items={items} selected={false} />
          </div>
          <div className="pt-11  w-full flex flex-col">
            <div className=" flex flex-col items-center w-full">
              <div
                className="w-40 rounded-full h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${foto})` }}
              />
            </div>
            <div className=" rounded-full ps-4 h-40 bg-cover flex flex-col gap-1 bg-center">
              <span className="font-bold">SZA</span>
              <span>Artist</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHome;
