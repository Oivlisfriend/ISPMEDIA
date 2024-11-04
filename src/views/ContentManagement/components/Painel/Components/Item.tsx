import React from "react";
import Button from "^/lib/component/buttton/Button";
import { MidiaViewProps } from "^/lib/core/viewModels/MidiaViewModel";
import foto from "^/lib/assets/foto3.png";

const Item = ({ setIsOpen, open }: Partial<MidiaViewProps>) => {
  return (
    <div className="w-96 h-auto o border p-2">
      <div className=" flex flex-col w-full h-full border p-4 border-stone-100 items-center justify-center gap-8 ">
        <img src={foto} alt="" className="rounded-full" />
        <div className="w-full">
          <span>Quer ver as métricas do seu último vídeo?</span>
          <span>Para começar, envie e publique um video aqui.</span>
        </div>
        <Button
          color={""}
          background={"red"}
          value={"Enviar Videos"}
          setIsOpen={setIsOpen}
          open={open}
        />
      </div>
    </div>
  );
};

export default Item;
