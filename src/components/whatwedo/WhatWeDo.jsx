import React from "react";
import { useTheme } from "../../context/ThemeContext";
import servicesData from "./servicesData";
import ServiceSection from "./ServiceSection";

function WhatWeDo() {
  const { darkMode } = useTheme();

  return (
    <section
      id="what-we-do"
      className={`py-16 transition-colors duration-300 ${
        darkMode ? "bg-[#161E2E]" : "bg-white"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-[130px]">

        
        <div className="text-center max-w-[709px] mx-auto">
          <h2
            className={`text-[32px] transition-colors duration-300 ${
              darkMode ? "text-white" : "text-[#161E2E]"
            }`}
          >
            What We Do
          </h2>

          <p
            className={`mt-4 text-[18px] leading-7 transition-colors duration-300 ${
              darkMode ? "text-gray-300" : "text-[#161E2E]"
            }`}
          >
            We are flexible and cope with multiple tasks to make you a leader
            in the market.
          </p>
        </div>

        
        <div className="mt-16 space-y-24">
          {servicesData.map((service) => (
            <ServiceSection
              key={service.id}
              service={service}
              darkMode={darkMode}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhatWeDo;