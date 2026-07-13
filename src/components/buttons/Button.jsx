import React from "react";

function Button({
  text,
  onClick,
  bgColor = "bg-[#00B871]",
  textColor = "text-white",
  hoverColor = "hover:bg-[#009e60]",
}) {
  return (
    <button
      onClick={onClick}
      className={`h-12 px-8 rounded-md transition ${bgColor} ${textColor} ${hoverColor}`}
    >
      {text}
    </button>
  );
}

export default Button;