import React from "react";
import Button from "../buttons/Button";
import { useTheme } from "../../context/ThemeContext";
import aboutIllustration from "../../assets/about/about.png";

function WhoWeAre() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`w-full transition-colors duration-300 ${
        darkMode ? "bg-[#161E2E]" : "bg-[#F4FBF7]"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-16 xl:px-[130px] py-12 md:py-16 lg:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-14 lg:gap-20">
          
          
          <div className="w-full max-w-[480px] text-center lg:text-left">
            <p className="text-[#00B871] text-sm sm:text-base mb-4 md:mb-6">
              Who we are
            </p>

            <h2
              className={`font-semibold leading-tight transition-colors duration-300
                text-[28px]
                sm:text-[34px]
                md:text-[40px]
                lg:text-[32px]
                xl:text-[40px]
                ${
                  darkMode ? "text-white" : "text-[#161E2E]"
                }`}
            >
              Top #1 marketing
              <br className="hidden sm:block" />
              agency in the world
            </h2>

            <p
              className={`mt-5 md:mt-6 text-base md:text-lg leading-7 transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-[#161E2E]"
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris imperdiet felis egestas augue. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Mauris imperdiet felis egestas augue.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <Button
                text="Get In Touch"
                bgColor={darkMode ? "bg-[#00B871]" : "bg-[#161E2E]"}
                hoverColor={
                  darkMode
                    ? "hover:bg-[#00965d]"
                    : "hover:bg-black"
                }
              />
            </div>
          </div>

          
          <div className="w-full flex justify-center lg:justify-end">
            <img
              src={aboutIllustration}
              alt="Who we are"
              className="
                w-full
                max-w-[300px]
                sm:max-w-[380px]
                md:max-w-[450px]
                lg:max-w-[520px]
                xl:max-w-[600px]
                h-auto
                object-contain
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;