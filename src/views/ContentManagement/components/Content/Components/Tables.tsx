import React from "react";
import { MdCheckBoxOutlineBlank, MdOutlineEdit } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { MidiaViewProps } from "^/lib/core/viewModels/MidiaViewModel";
import { MidiaDTO } from "^/lib/core/adapters/AdaptersDTO";
import { observer } from "mobx-react";

const Tables = ({
  midiaModel,
  setIsOpen,
  setSelected,
}: Partial<MidiaViewProps>) => {
  const title = [
    "Videos",
    "Visibilidade",
    "data",
    "Descrição",
    "comentarios",
    "Tamanho",
  ];

  return (
    <table className="w-full text-left ">
      <thead className="border-b-2">
        <tr>
          {title?.map((item: string, index: number) =>
            item === "Videos" ? (
              <th className="w-96 flex flex-row items-center gap-2" key={index}>
                <MdCheckBoxOutlineBlank size={24} />
                {item}
              </th>
            ) : (
              <th key={index}>{item}</th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {midiaModel?.listMidias?.map((item: MidiaDTO, index: number) => (
          <tr className="hover:bg-zinc-800 items-center" key={index}>
            <td className="w-96 h-24 flex flex-row gap-2 items-center py-2 ">
              <MdCheckBoxOutlineBlank size={24} />
              <img
                src={`data:image/*;base64,${item.imagem}`}
                alt=""
                className="h-8"
              />
              <div className="w-full">
                {item.titulo}
                <div className="w-full flex justify-end gap-8">
                  <div>
                    <MdOutlineEdit
                      onClick={() => {
                        midiaModel.setMidia(item);
                        setSelected && setSelected("Edit");
                      }}
                    />
                  </div>
                  <CiMenuKebab />
                </div>
              </div>
            </td>
            <td className="w-16">{item.visibilidade}</td>
            <td className="w-40">{item.data}</td>
            <td className="w-40">{item.descricao}</td>
            <td className="w-40">{item.comentarios}</td>
            <td className="w-40">{item.tamanho}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default observer(Tables);
