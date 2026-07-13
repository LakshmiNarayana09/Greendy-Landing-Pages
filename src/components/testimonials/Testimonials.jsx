import React from "react";
import { useTheme } from "../../context/ThemeContext";
import testimonialsData from "./testimonialsData";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`py-16 transition-colors duration-300 ${
        darkMode ? "bg-[#161E2E]" : "bg-white"
      }`}
    >
      <div className="max-w-[1440px] mx-auto">

       
        <div className="max-w-[709px] mx-auto text-center px-5">

          <h2
            className={`text-[32px] transition-colors duration-300 ${
              darkMode ? "text-white" : "text-[#161E2E]"
            }`}
          >
            What our client say
          </h2>

          <p
            className={`mt-4 text-[18px] leading-7 transition-colors duration-300 ${
              darkMode ? "text-gray-300" : "text-[#161E2E]"
            }`}
          >
            We are flexible and cope with multiple tasks to make you a
            leader in the market.
          </p>

        </div>

        
        <div className="mt-12 overflow-x-auto">

          <div className="flex gap-8 px-5 md:px-10 xl:px-[130px] min-w-max">

            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="w-[481px] flex-shrink-0"
              >
                <TestimonialCard
                  description={item.description}
                  name={item.name}
                  role={item.role}
                  darkMode={darkMode}
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;