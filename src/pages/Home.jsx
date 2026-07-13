import React, { useState } from "react";

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Brands from "../components/brands/Brands";
import WhoWeAre from "../components/whoweare/WhoWeAre";
import WhyChooseUs from "../components/whychooseus/WhyChooseUs";
import Statistics from "../components/statistics/Statistics";
import WhatWeDo from "../components/whatwedo/WhatWeDo";
import Strategy from "../components/strategy/Strategy";
import Blog from "../components/blog/Blog";
import Testimonials from "../components/testimonials/Testimonials";
import NewsLetter from "../components/news-letter/NewsLetter";
import Footer from "../components/footer/Footer";

import BackdropMenu from "../components/backdrop/BackDropMenu";
import WebsiteCheckupModal from "../components/calltoaction/WebsiteCheckupModel";

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative">
      
      <Navbar
        onWhatWeDoClick={() => {
          setShowDropdown(true);
        }}
      />

      
      {showDropdown && (
        <BackdropMenu
          onClose={() => setShowDropdown(false)}
          onDesignClick={() => {
            setShowDropdown(false);
            setShowModal(true);
          }}
        />
      )}

      
      {showModal && (
        <div className="fixed inset-0 z-[100] bg-black/30 overflow-y-auto">
          <div className="min-h-full flex justify-center items-start py-6 px-4">
            <WebsiteCheckupModal
              onClose={() => setShowModal(false)}
            />
          </div>
        </div>
      )}

      
      <Hero />
      <Brands />
      <WhoWeAre />
      <WhyChooseUs />
      <Statistics />
      <WhatWeDo />
      <Strategy />
      <Blog />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;