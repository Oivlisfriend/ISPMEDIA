import Button from "^/lib/component/buttton/Button";
import React from "react";
import { observer } from "mobx-react";
import { MidiaViewProps } from "^/lib/core/viewModels/MidiaViewModel";

const Edit = ({ midiaModel }: MidiaViewProps) => {
  console.log(midiaModel?.midia);
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h2 className="w-4/5 flex items-start">Detalhes</h2>
      </div>
      <div className=" flex justify-start w-4/5 flex-col">
        <span className="">
          Titulo <span className="font-light">(Campo obrigatório)</span>
        </span>
        <input
          type="text"
          name="titulo"
          id="titulo"
          value={midiaModel?.titulo}
          onChange={(e) => midiaModel?.setTitulo(e.target.value)}
          placeholder={midiaModel?.midia.titulo}
          className="h-10 text-start black-600 focus:outline-none px-2"
        />
      </div>
      <div className=" flex  justify-start w-4/5 flex-col">
        <span className="">Descrição</span>
        <input
          type="text"
          name="descricao"
          id="descricao"
          value={midiaModel?.descricao}
          onChange={(e) => midiaModel?.setDescricao(e.target.value)}
          placeholder={midiaModel?.midia.descricao}
          className="h-12 text-start black-600"
        />
      </div>
      <div className=" flex  justify-start w-4/5 flex-col">
        <span className="">Visibilidade</span>
        <select
          name="select"
          id="select"
          className="black-600 h-12"
          title="Selecionar"
        >
          <option>Selecionar</option>
          <option>Privado</option>
          <option>Publico</option>
        </select>
      </div>
      <div className="w-4/5 flex justify-center">
        <Button color={""} background={"red"} value={"Guardar"} />
      </div>
    </div>
  );
};

export default observer(Edit);
