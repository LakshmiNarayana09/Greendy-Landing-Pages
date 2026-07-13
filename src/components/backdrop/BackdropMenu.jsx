import React from "react";
import { ArrowRight } from "lucide-react";
import backdropMenuData from "./backdropMenuData";

function BackdropMenu({ onClose, onDesignClick }) {
  const handleClick = (item) => {
    if (item.title === "Design") {
      onDesignClick?.();
    } else {
      onClose?.();
    }
  };

  return (
    <>
      
      <div
        className="fixed inset-0 z-30"
        onClick={onClose}
      />

      
      <div
        className="
          absolute
          top-20
          left-1/2
          -translate-x-1/2
          z-40
          w-full
          px-4
          sm:px-6
          lg:px-0
          flex
          justify-center
        "
      >
        <div
          className="
            w-full
            max-w-[417px]
            rounded-xl
            bg-white
            shadow-[0px_6px_16px_4px_rgba(47,223,132,0.15)]
            p-4
            sm:p-5
            md:p-6
          "
        >
          <div className="space-y-2 sm:space-y-3">
            {backdropMenuData.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  onClick={() => handleClick(item)}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-3
                    sm:px-4
                    py-3
                    sm:py-4
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:bg-[#F4FBF7]
                  "
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    
                    <div
                      className="
                        w-8 h-8
                        sm:w-9 sm:h-9
                        flex
                        items-center
                        justify-center
                        border
                        border-[#00B871]
                        rounded
                      "
                    >
                      <Icon
                        className="text-[#00B871] w-4 h-4 sm:w-[18px] sm:h-[18px]"
                      />
                    </div>

                    
                    <div>
                      <h4
                        className="
                          text-[13px]
                          sm:text-[14px]
                          font-medium
                          text-[#161E2E]
                          group-hover:text-[#00B871]
                          transition-colors
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                          text-[11px]
                          sm:text-[12px]
                          text-[#161E2E]
                          mt-1
                        "
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className="
                      text-[#00B871]
                      w-4 h-4
                      sm:w-[18px] sm:h-[18px]
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                    "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BackdropMenu;