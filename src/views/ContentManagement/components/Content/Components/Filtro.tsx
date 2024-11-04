import React from "react";
import { MdFilterList } from "react-icons/md";

// import { Container } from './styles';

const Filtro = () => {
  return (
    <div className="flex flex-row gap-12 w-full border-b-2">
      <MdFilterList size={24} />
      <span>Fitros</span>
    </div>
  );
};

export default Filtro;
