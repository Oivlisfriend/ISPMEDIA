import React, { useEffect } from "react";
import { FiHome } from "react-icons/fi";
import { PiFolders } from "react-icons/pi";
import { LiaSearchSolid } from "react-icons/lia";
import { CgMenu } from "react-icons/cg";
import { IoIosRadio } from "react-icons/io";
import DropdownMenu from "~/component/DropDown/DropDown";
import { observer } from "mobx-react";
import { AuthViewProps } from "^/lib/core/viewModels/auth/authViewModel";

const Header = ({ viewModel }: AuthViewProps) => {
  useEffect(() => {
    viewModel.verifyLogin();
  }, [viewModel]);

  return (
    <header className="fixed z-40 black-700 w-full flex text-sm py-1  items-center justify-between gap-80 px-6">
      <div>
        <CgMenu className="text-2xl" />
      </div>
      <div className="container mx-full py-1 flex items-center justify-between">
        <ul className="nav-links hidden md:flex space-x-6 gap-9">
          <li className="flex justify-center items-center gap-3">
            <FiHome className="text-xl" />
            <a href="/" className="hover:text-gray-400">
              Casa
            </a>
          </li>
          <li className="flex justify-center items-center gap-3 ">
            <PiFolders className="text-2xl" />
            <a href="#sobre" className="hover:text-gray-400">
              Biblioteca
            </a>
          </li>
          <li className="flex justify-center items-center gap-3 ">
            <IoIosRadio className="text-2xl" />
            <a href="Radio" className="hover:text-gray-400">
              Radio
            </a>
          </li>
          <li className="flex justify-center items-center gap-3">
            <LiaSearchSolid className="text-2xl" />
            <a href="#servicos" className="hover:text-gray-400">
              Procurar
            </a>
          </li>
        </ul>
        {viewModel.getUserProfile ? (
          <DropdownMenu viewModel={viewModel} />
        ) : (
          <div className="flex gap-4 items-center rounded-3xl">
            <a href="Login" className="hover:text-gray-400">
              Login
            </a>
            <a href="SignUp" className="hover:text-gray-400">
              Criar conta
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default observer(Header);
