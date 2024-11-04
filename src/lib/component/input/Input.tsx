import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  texto: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  texto,
}) => {
  return (
    <div className="flex flex-col ">
      <span className="text-white font-[16px]">{texto}</span>
      <input
        type={type}
        className="w-80 font-light text-white h-[57] rounded-xl p-3 bg-transparent border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          padding: "10px",
          margin: "10px 0",
          width: "100%",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};
export default Input;
