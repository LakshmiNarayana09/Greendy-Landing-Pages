import React from "react";

function StatisticCard({ value, title, Icon }) {
  return (
    <div className="flex flex-col items-center text-center">
      
      <div className="flex items-center gap-2">
        <h3
          className="
            text-white
            font-semibold
            text-[32px]
            sm:text-[40px]
            md:text-[44px]
            lg:text-[48px]
            leading-none
          "
        >
          {value}
        </h3>

        <Icon
          className="
            text-[#00B871]
            w-8 h-8
            sm:w-9 sm:h-9
            md:w-10 md:h-10
            lg:w-[42px] lg:h-[42px]
          "
          strokeWidth={2.5}
        />
      </div>

      
      <p
        className="
          mt-3
          text-white
          text-sm
          sm:text-base
          md:text-lg
          leading-6
          max-w-[180px]
        "
      >
        {title}
      </p>
    </div>
  );
}

export default StatisticCard;