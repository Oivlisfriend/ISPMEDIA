import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

type UserButtonProps = {
  user: string;
  picture: string;
} & React.HTMLProps<HTMLButtonElement>;

const UserButton = ({ user, picture, onClick }: UserButtonProps) => {
  return (
    <button
      onClick={onClick}
      className=" flex justify-between items-center bg-[#1C1C1C] text-[#fff] px-4  rounded-3xl w-48"
    >
      <div className="flex items-center">
        <img src={picture} alt="user" className="w-12 h-12 rounded-full" />
        <span>{user}</span>
      </div>
      <MdKeyboardArrowDown className="text-2xl" />
    </button>
  );
};

export default UserButton;
