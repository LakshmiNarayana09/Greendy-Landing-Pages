import React from "react";

function FeatureCard({
  icon,
  title,
  description,
  darkMode,
}) {
  return (
    <div
      className={`rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md ${
        darkMode
          ? "bg-[#161E2E] border border-[#334155]"
          : "bg-white border border-[#D2D6DC]"
      }`}
    >
      <img
        src={icon}
        alt={title}
        className="w-[45px] h-[45px] mb-6"
      />

      <h3
        className={`text-[18px] leading-6 mb-4 transition-colors duration-300 ${
          darkMode ? "text-white" : "text-[#161E2E]"
        }`}
      >
        {title}
      </h3>

      <p
        className={`text-[16px] leading-[27px] transition-colors duration-300 ${
          darkMode ? "text-gray-300" : "text-[#161E2E]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;