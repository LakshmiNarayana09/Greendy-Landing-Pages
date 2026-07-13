import React from "react";
import Button from "../buttons/Button";
import FeatureCard from "./FeatureCard";
import { useTheme } from "../../context/ThemeContext";

import ecommerce from "../../assets/features/ecommerce.png";
import growth from "../../assets/features/growth.png";
import transparency from "../../assets/features/transparency.png";
import experts from "../../assets/features/experts.png";
import woman from "../../assets/features/woman.jpg";

function WhyChooseUs() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`py-24 transition-colors duration-300 ${
        darkMode ? "bg-[#161E2E]" : "bg-[#F4FBF7]"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-[130px]">
        <h2
          className={`max-w-[500px] text-[32px] leading-tight transition-colors duration-300 ${
            darkMode ? "text-white" : "text-[#161E2E]"
          }`}
        >
          Why top Ecommerce and startup companies choose us :
        </h2>

        <div className="mt-14 flex flex-col lg:flex-row justify-between items-center gap-12">

          
          <div className="max-w-[705px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <FeatureCard
                active
                icon={ecommerce}
                title="We are commerce first"
                description="We are improving businesses based on our vast experience."
                darkMode={darkMode}
              />

              <FeatureCard
                icon={growth}
                title="Our focus is on growth"
                description="Our main goal is to make your online store better every day."
                darkMode={darkMode}
              />

              <FeatureCard
                icon={transparency}
                title="Transparency"
                description="You can follow all our steps due to strategy and be a part of changes."
                darkMode={darkMode}
              />

              <FeatureCard
                icon={experts}
                title="We're experts"
                description="The team of experts includes business owners and advisers."
                darkMode={darkMode}
              />

            </div>

            <div className="mt-10">
              <Button
                text="Let's Chat"
                bgColor={darkMode ? "bg-[#00B871]" : "bg-[#161E2E]"}
                hoverColor={darkMode ? "hover:bg-[#00965d]" : "hover:bg-black"}
              />
            </div>
          </div>

          
          <div className="w-full max-w-[388px]">
            <img
              src={woman}
              alt="Woman"
              className="w-full rounded-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;