import React from "react";

type ButtonCustomProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;          
  type?: "button" | "submit" | "reset";
};

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        text-[16px] mt-2 px-4 py-2 text-[#0070ef]
        border-[1.2px] border-[#0070ef] rounded-3xl
        flex items-center gap-1 cursor-pointer font-medium
        hover:bg-[#0070ef] hover:text-white transition-colors duration-100
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default ButtonCustom;
