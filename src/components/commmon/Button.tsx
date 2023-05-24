
import React from "react";

type ButtonProps = {
  content: string;
  onClick: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ content, onClick, className }) => {
  return (
    <button
      className={`bg-neutral-100 px-4 py-2 hover:bg-neutral-50 font-semibold rounded-lg border border-neutral-300 ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
