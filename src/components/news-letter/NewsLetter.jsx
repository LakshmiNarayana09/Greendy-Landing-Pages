import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Button from "../buttons/Button";

function NewsLetter() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`py-16 ${
        darkMode ? "bg-[#161E2E]" : "bg-white"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-[354px]">

        
        <div className="text-center max-w-[671px] mx-auto">
          <h2
            className={`text-[32px] leading-none ${
              darkMode ? "text-white" : "text-[#161E2E]"
            }`}
          >
            Stay update
          </h2>

          <p
            className={`mt-4 text-[18px] leading-7 ${
              darkMode ? "text-gray-300" : "text-[#161E2E]"
            }`}
          >
            Subscribe to our newsletter to receive our best daily, week and
            month offer.
          </p>
        </div>

        
        <div className="mt-12 bg-white rounded-md shadow-[0px_6px_16px_4px_rgba(47,223,132,0.15)] p-6 md:px-8 md:py-6">

          <form className="flex flex-col md:flex-row items-center justify-between gap-5">

            <input
              type="email"
              placeholder="email address"
              className="w-full outline-none text-[18px] text-[#161E2E] placeholder:text-[#9BA4B0]"
            />

            <Button text="Subscribe" />

          </form>

        </div>

      </div>
    </section>
  );
}

export default NewsLetter;