import React from "react";
import StatisticsCard from "./StatisticsCard";
import { stats } from "./statsData";
import { useTheme } from "../../context/ThemeContext";

function Statistics() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`transition-colors duration-300 py-12 md:py-16 lg:py-20 ${
        darkMode ? "bg-[#161E2E]" : "bg-white"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-16 xl:px-[130px]">
        <div className="bg-[#161E2E] rounded-xl px-6 sm:px-8 md:px-10 lg:px-12 py-10 md:py-14 lg:py-16">
          
          
          <h2
            className="
              text-white
              text-[28px]
              sm:text-[34px]
              md:text-[40px]
              lg:text-[48px]
              font-semibold
              text-center
              leading-tight
              mb-10
              md:mb-14
              lg:mb-16
            "
          >
            The proofs is in the numbers
          </h2>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {stats.map((item, index) => (
              <StatisticsCard
                key={index}
                value={item.value}
                title={item.title}
                Icon={item.icon}
                darkMode={darkMode}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Statistics;