import React from "react";

function TestimonialCard({
  description,
  name,
  role,
  darkMode,
}) {
  return (
    <div
      className={`rounded-xl p-8 transition-all duration-300 ${
        darkMode
          ? "bg-[#161E2E] shadow-[0_6px_16px_4px_rgba(0,0,0,0.35)]"
          : "bg-white shadow-[0_6px_16px_4px_rgba(47,223,132,0.15)]"
      }`}
    >
      <p
        className={`text-base leading-[27px] italic transition-colors duration-300 ${
          darkMode ? "text-gray-300" : "text-[#161E2E]"
        }`}
      >
        {description}
      </p>

      <div className="flex items-center gap-3 mt-8">
        <div
          className={`w-8 h-8 rounded-full transition-colors duration-300 ${
            darkMode ? "bg-[#00B871]" : "bg-[#161E2E]"
          }`}
        />

        <div>
          <h4
            className={`text-xs transition-colors duration-300 ${
              darkMode ? "text-white" : "text-[#161E2E]"
            }`}
          >
            {name}
          </h4>

          <p
            className={`text-[10px] transition-colors duration-300 ${
              darkMode ? "text-gray-400" : "text-[#161E2E]"
            }`}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;