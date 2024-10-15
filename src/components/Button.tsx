import { ReactNode } from "react";

type ButtonProps = {
  buttonType?: "primary" | "secondary";
  children: ReactNode;
  type: "button" | "submit" | "reset";
  onClick: () => Promise<void> | void;
};

function Button({ children, type, buttonType, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full rounded-[5px] cursor-pointer text-white
        ${buttonType === "secondary" ? "opacity-[85%]" : ""}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
