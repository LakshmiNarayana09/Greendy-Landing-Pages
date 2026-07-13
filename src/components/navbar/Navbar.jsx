import React, { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import lightLogo from "../../assets/light-logo.png";
import darkLogo from "../../assets/dark-logo.png";
import { useTheme } from "../../context/ThemeContext";
import WebsiteCheckupModel from "../calltoaction/WebsiteCheckupModel";

function Navbar({ onWhatWeDoClick,onWhoWeAreClick,onReviewsClick,onBlogClick, }) {
  const { darkMode, toggleTheme } = useTheme();
  const [activeMenu, setActiveMenu] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        darkMode ? "bg-[#161E2E]" : "bg-white"
      }`}
    >
      <div className="max-w-[1440px] mx-auto h-20 px-5 md:px-10 xl:px-[126px] flex items-center justify-between">
        
        <img
          src={darkMode ? darkLogo : lightLogo}
          alt="Greendy Logo"
          className="cursor-pointer w-[130px] sm:w-[150px] lg:w-auto"
        />

        
        <nav className="hidden lg:block">
          <ul
            className={`flex items-center gap-10 text-base ${
              darkMode ? "text-white" : "text-[#161E2E]"
            }`}
          >
            <li
              onClick={() => {
                setMenuOpen(false);
                setActiveMenu("who");
                onWhoWeAreClick?.();
              }}
              className={`cursor-pointer transition ${
                activeMenu === "who"
                  ? "text-[#00B871]"
                  : darkMode
                  ? "text-white"
                  : "text-[#161E2E]"
              } hover:text-[#00B871]`}
            >
              Who we are
            </li>

            <li
              onClick={() => {
                setMenuOpen(false);
                setActiveMenu("what");
                onWhatWeDoClick?.();
              }}
              className={`flex items-center gap-1 cursor-pointer transition ${
                activeMenu === "what"
                  ? "text-[#00B871]"
                  : darkMode
                  ? "text-white"
                  : "text-[#161E2E]"
              } hover:text-[#00B871]`}
            >
              What we do
              <ChevronDown size={16} />
            </li>

            <li
              onClick={() => {
                setMenuOpen(false);
                setActiveMenu("reviews")
                onReviewsClick?.();
              }}
              className={`cursor-pointer transition ${
                activeMenu === "reviews"
                  ? "text-[#00B871]"
                  : darkMode
                  ? "text-white"
                  : "text-[#161E2E]"
              } hover:text-[#00B871]`}
            >
              Reviews
            </li>

            <li
              onClick={() => {
                setMenuOpen(false);
                setActiveMenu("blog")
                onBlogClick?.();
              }}
              className={`cursor-pointer transition ${
                activeMenu === "blog"
                  ? "text-[#00B871]"
                  : darkMode
                  ? "text-white"
                  : "text-[#161E2E]"
              } hover:text-[#00B871]`}
            >
              Blog
            </li>
          </ul>
        </nav>

        
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`h-12 px-5 rounded-lg border flex items-center justify-center gap-2 font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
              darkMode
                ? "bg-[#232D42] border-[#2FDF84] text-white hover:bg-[#2D3852]"
                : "bg-white border-[#D9E2EC] text-[#161E2E] hover:bg-[#F4FBF7] hover:border-[#00B871]"
            }`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-[340px] h-12 bg-[#00B871] rounded-lg flex justify-center items-center gap-3 text-white hover:bg-[#009e60] transition"
          >
            Get your free website review
            <ArrowRight size={20} />
          </button>
        </div>

        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden ${
            darkMode ? "text-white" : "text-[#161E2E]"
          }`}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        } ${darkMode ? "bg-[#161E2E]" : "bg-white"}`}
      >
        <div className="px-6 py-6">
          <ul
            className={`flex flex-col gap-6 text-lg ${
              darkMode ? "text-white" : "text-[#161E2E]"
            }`}
          >
            <li
              onClick={() => {
                setMenuOpen(false);
                onWhoWeAreClick?.();
              }}
              className="cursor-pointer"
            >
              Who we are
            </li>

            <li
              onClick={() => {
                setMenuOpen(false);
                onWhatWeDoClick?.();
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              What we do
              <ChevronDown size={18} />
            </li>

            <li
              onClick={() => {
                setMenuOpen(false);
                onReviewsClick?.();
              }}
              className="cursor-pointer"
            >
              Reviews
            </li>

            <li
              onClick={() => {
                setMenuOpen(false);
                onBlogClick?.();
              }}
              className="cursor-pointer"
            >
              Blog
            </li>
          </ul>

          <div className="flex flex-col gap-4 mt-8">
            <button
              onClick={toggleTheme}
              className={`h-12 w-full rounded-lg border flex items-center justify-center gap-2 font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                darkMode
                  ? "bg-[#232D42] border-[#2FDF84] text-white hover:bg-[#2D3852]"
                  : "bg-white border-[#D9E2EC] text-[#161E2E] hover:bg-[#F4FBF7] hover:border-[#00B871]"
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              
            </button>

            <button
              onClick={() => {
                setMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="h-12 bg-[#00B871] rounded-lg flex justify-center items-center gap-3 text-white hover:bg-[#009e60] transition"
            >
              Get your free website review
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <WebsiteCheckupModel
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </header>
  );
}

export default Navbar;