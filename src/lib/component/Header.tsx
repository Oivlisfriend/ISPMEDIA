import React from "react";
import { FiHome } from "react-icons/fi";
import { PiFolders } from "react-icons/pi";
import { LiaSearchSolid } from "react-icons/lia";
import { CgMenu } from "react-icons/cg";
import UserButton from "./UserButton";
import picture from "~/assets/logo.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center text-[#898989] py-6  font-medium">
      <div className=" ps-6">
        <CgMenu className="text-2xl" />
      </div>
      <div className="flex gap-9 ps-9 cursor-pointer">
        <div className="flex flex-row justify-center text-sm items-center gap-3">
          <FiHome className="text-xl" />
          <span>Header</span>
        </div>
        <div className="flex flex-row justify-center text-sm items-center gap-3 cursor-pointer">
          <PiFolders className="text-2xl" />
          <span>Your Library</span>
        </div>
        <div className="flex flex-row justify-center text-sm items-center gap-3 cursor-pointer">
          <LiaSearchSolid className="text-2xl" />
          <span>Search</span>
        </div>
      </div>
      <div className=" pe-6">
        <UserButton user="Hayley Marjoram" picture={picture} />
      </div>
    </header>
  );
};

export default Header;
