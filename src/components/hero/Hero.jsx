import React from "react";
import Button from "../buttons/Button";
import { useTheme } from "../../context/ThemeContext";
import hero from "../../assets/hero/hero.png";

function Hero() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`w-full transition-colors duration-300 ${
        darkMode ? "bg-[#161E2E]" : "bg-white"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-16 xl:px-[130px] py-12 md:py-16 lg:py-24 xl:py-[128px]">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          <div className="w-full max-w-[600px] text-center lg:text-left">
            <p className="text-[#00B871] text-sm sm:text-base mb-4">
              Award winning company
            </p>

            <h1
              className={`font-semibold leading-tight transition-colors duration-300
              text-[34px]
              sm:text-[42px]
              md:text-[52px]
              lg:text-[58px]
              xl:text-[64px]
              ${
                darkMode ? "text-white" : "text-[#161E2E]"
              }`}
            >
              Digital marketing
              <br className="hidden sm:block" />
              agency and design. We
              <br className="hidden sm:block" />
              grow your business
              <br className="hidden sm:block" />
              online
            </h1>

            <p
              className={`mt-6 text-base md:text-lg leading-7 max-w-[560px] mx-auto lg:mx-0 transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-[#161E2E]"
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris imperdiet felis egestas augue. Donec vitae libero
              euismod, feugiat lectus non, tincidunt orci.
            </p>

            <div className="mt-8 md:mt-10 flex justify-center lg:justify-start">
              <Button text="Start a project" />
            </div>
          </div>

          
          <div className="w-full max-w-[600px] flex justify-center">
            <img
              src={hero}
              alt="Hero"
              className="
                w-full
                max-w-[280px]
                sm:max-w-[360px]
                md:max-w-[450px]
                lg:max-w-[520px]
                xl:max-w-[580px]
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

export default Hero;