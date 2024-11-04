import { MidiaDTO } from "^/lib/core/adapters/AdaptersDTO";
import { MidiaView } from "^/lib/core/viewModels/MidiaViewModel";
import React from "react";
import { useNavigate } from "react-router-dom";

// import { Container } from './styles';
type props = {
  item: MidiaDTO;
} & MidiaView;
const ItemMedia = ({ item, midiaView }: props) => {
  const navigate = useNavigate();
  const getCurrentRoute = () => {
    const pathname = window.location.pathname;
    const name = pathname.split("/").pop();
    return { name };
  };
  const navigation = {
    getCurrentRoute,
  };
  return (
    <button
      onClick={() =>
        midiaView.reproduceMidiaNow(
          item.arquivo,
          item.id_midia,
          navigation,
          navigate
        )
      }
      className="flex flex-col gap-4 w-[18rem] h-56 bg-zinc-800 rounded-md"
    >
      <img
        src={`data:image/*;base64,${item.imagem}`}
        className="w-full h-40"
        alt=""
      />
      <div className="flex justify-between px-3 items-center">
        <div className="flex flex-col w overflow-hidden">
          <span className="text-start h-12  text-ellipsis ">{item.titulo}</span>
        </div>
      </div>
    </button>
  );
};

export default ItemMedia;
