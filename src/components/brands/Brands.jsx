import React from "react";
import { useTheme } from "../../context/ThemeContext";
import bitbucket from "../../assets/brands/bitbucket.png";
import watch from "../../assets/brands/apple-watch.png";
import facebook from "../../assets/brands/facebook.png";
import atlassian from "../../assets/brands/atlassian.png";
import audi from "../../assets/brands/audi.png";

function Brands() {
  const { darkMode } = useTheme();

  const brands = [
    bitbucket,
    watch,
    facebook,
    atlassian,
    audi,
  ];

  return (
    <section
      className={`w-full transition-colors duration-300 ${
        darkMode ? "bg-[#161E2E]" : "bg-[#F4FBF7]"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-16 xl:px-[130px] py-8 md:py-10">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12 md:gap-x-16 lg:gap-x-20">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand}
              alt={`Brand ${index + 1}`}
              className={`
                ${
                  index < 3 ? "hidden sm:block" : "block"
                }
                h-5
                sm:h-6
                md:h-7
                lg:h-8
                w-auto
                object-contain
                opacity-60
                hover:opacity-100
                transition-all
                duration-300
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;