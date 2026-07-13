import React from "react";

function FeatureCard({
  icon,
  title,
  description,
  active = false,
  darkMode,
}) {
  return (
    <div
      className={`rounded-lg p-8 transition-all duration-300 ${
        active
          ? darkMode
            ? "bg-[#1E293B] shadow-lg"
            : "bg-white shadow-lg"
          : darkMode
          ? "bg-transparent"
          : "bg-transparent"
      }`}
    >
      <img
        src={icon}
        alt={title}
        className="w-11 h-11 mb-8"
      />

      <h3
        className={`text-[18px] mb-3 transition-colors duration-300 ${
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