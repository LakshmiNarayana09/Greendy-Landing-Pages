import React from "react";
import { useNavigate } from "react-router-dom";
import FeatureCard from "./FeatureCard";

function ServiceSection({ service, darkMode }) {
  const navigate = useNavigate();

  const content = (
    <div className="flex-1">
      <h2
        className={`text-[32px] leading-tight mb-10 transition-colors duration-300 ${
          darkMode ? "text-white" : "text-[#161E2E]"
        }`}
      >
        {service.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {service.cards.map((card) => (
          <FeatureCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );

  const image = (
    <div className="flex justify-center flex-1">
      <img
        src={service.image}
        alt={service.title}
        className="w-full max-w-[404px] rounded-lg object-cover"
      />
    </div>
  );

  return (
    <div
      className="flex flex-col lg:flex-row items-center gap-16 cursor-pointer"
      onClick={() => navigate("/backdrop")}
    >
      {service.imageLeft ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </div>
  );
}

export default ServiceSection;