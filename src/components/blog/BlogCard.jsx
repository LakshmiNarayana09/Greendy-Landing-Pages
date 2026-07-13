import React from "react";
import Button from "../buttons/Button";

function BlogCard({
  image,
  category,
  title,
  description,
  darkMode,
}) {
  return (
    <div
      className={`rounded-[10px] overflow-hidden transition-all duration-300 ${
        darkMode
          ? "bg-[#161E2E] shadow-[0_6px_16px_4px_rgba(0,0,0,0.35)]"
          : "bg-white shadow-[0_6px_16px_4px_rgba(47,223,132,0.15)]"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] object-cover"
      />

      <div className="p-6">
        <p className="text-[#00B871] text-base mb-4">
          {category}
        </p>

        <h3
          className={`text-2xl leading-tight mb-4 transition-colors duration-300 ${
            darkMode ? "text-white" : "text-[#161E2E]"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-sm leading-7 mb-8 transition-colors duration-300 ${
            darkMode ? "text-gray-300" : "text-[#161E2E]"
          }`}
        >
          {description}
        </p>

        <Button
          text="Read More →"
          bgColor={darkMode ? "bg-[#00B871]" : "bg-[#00B871]"}
          hoverColor={darkMode ? "hover:bg-[#00965D]" : "hover:bg-[#00965D]"}
        />
      </div>
    </div>
  );
}

export default BlogCard;