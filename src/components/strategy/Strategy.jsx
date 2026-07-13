import React from "react";
import strategyImage from "../../assets/strategy/strategy.jpg";

function ProvenStrategy() {
  return (
    <section className="w-full bg-[#161E2E]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-[130px] py-16 lg:py-[98px]">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          
          <div className="w-full lg:max-w-[680px]">
            <img
              src={strategyImage}
              alt="Business Strategy"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          
          <div className="w-full lg:max-w-[395px] text-center lg:text-left">

            <h2
              className="
                text-white
                text-[28px]
                md:text-[32px]
                leading-tight
                mb-6
              "
            >
              Our Proven Strategy for
              <br />
              Growing Your Sales
            </h2>

            <p
              className="
                text-[#F7F7F8]
                text-[16px]
                md:text-[18px]
                leading-7
              "
            >
              We are carrying your business based on the adapted
              business plan with the main market trends. Be always
              relevant and competitive.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProvenStrategy;