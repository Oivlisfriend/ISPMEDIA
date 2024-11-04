import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"button"> {
  color?: string;
  background?: string;
  value?: string;
  border?: string;
  icon?: string;
  size?: number;
  type?: any;
  setIsOpen?: (status: boolean) => void;
  open?: boolean;
}

const Button = (props: InputProps) => {
  return (
    <div>
      <button
        onClick={() => props.setIsOpen && props.setIsOpen(!props.open)}
        style={{
          background: props.background,
          border: props.border ? props.border : "none",
          color: props.color,
        }}
        className="w-auto h-[57] rounded-lg py-2 px-6 flex  items-center justify-center"
        type={props.type}
      >
        {props.icon && (
          <img src={props.icon} alt="icon" className="w-[20px] h-[20px]" />
        )}{" "}
        {props.value}
      </button>
    </div>
  );
};
export default Button;
