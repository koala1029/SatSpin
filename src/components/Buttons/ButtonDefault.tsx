import React from "react";

interface ButtonProps {
  label: string;
  customClasses: string;
  onClick: () => void;
}

const ButtonDefault = ({ label, customClasses, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2.5 rounded-lg border px-5 py-2 text-center font-medium hover:bg-opacity-90 ${customClasses}`}
    >
      {label}
    </button>
  );
};

export default ButtonDefault;