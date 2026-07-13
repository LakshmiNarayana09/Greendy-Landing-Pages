import React from "react";
import { useTheme } from "../../context/ThemeContext";
import BlogCard from "./BlogCard";
import blogData from "./blogData";

function Blog() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`py-16 transition-colors duration-300 ${
        darkMode ? "bg-[#161E2E]" : "bg-white"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-[130px]">

        
        <div className="max-w-[504px] mx-auto text-center">

          <h2
            className={`text-[32px] leading-tight transition-colors duration-300 ${
              darkMode ? "text-white" : "text-[#161E2E]"
            }`}
          >
            Why you need multiple marketing strategies
          </h2>

          <p
            className={`mt-4 text-lg transition-colors duration-300 ${
              darkMode ? "text-gray-300" : "text-[#161E2E]"
            }`}
          >
            Choose your best ecommerce store
          </p>

        </div>

        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {blogData.map((item) => (
            <BlogCard
              key={item.id}
              image={item.image}
              category={item.category}
              title={item.title}
              description={item.description}
              darkMode={darkMode}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Blog;