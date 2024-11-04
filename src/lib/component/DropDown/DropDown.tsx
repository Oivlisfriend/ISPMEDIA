import React, { useState } from "react";
import UserButton from "~/component/UserButton";
import picture from "~/assets/logo.png";
import { AuthViewProps } from "^/lib/core/viewModels/auth/authViewModel";
import { observer } from "mobx-react";

const DropdownMenu = ({ viewModel }: AuthViewProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <UserButton
        user={
          viewModel.getUserProfile?.username
            ? viewModel.getUserProfile?.username
            : ""
        }
        picture={
          viewModel.getUserProfile?.avatar
            ? viewModel.getUserProfile?.avatar
            : picture
        }
        onClick={toggleDropdown}
      />

      {isOpen && (
        <div
          className="py-1 origin-top-right absolute right-6 mt-2 w-48 shadow-lg bg-black-600 rounded-3xl z-50 black-600"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            href="/Profile"
            className="block px-4 py-2 text-sm  hover:text-gray-500"
            role="menuitem"
          >
            Perfil
          </a>
          <a
            href="/ContentManagement"
            className="block px-4 py-2 text-sm  hover:text-gray-500"
            role="menuitem"
          >
            Gestão de Conteúdo
          </a>
          <a
            href="/Support"
            className="block px-4 py-2 text-sm  hover:text-gray-500"
            role="menuitem"
          >
            Suporte
          </a>
          <button
            type="submit"
            className="block px-4 py-2 text-sm  hover:text-gray-500"
            role="menuitem"
            onClick={() => viewModel.endSession()}
          >
            Sair
          </button>
        </div>
      )}
    </div>
  );
};

export default observer(DropdownMenu);
