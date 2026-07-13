import React, { useState } from "react";
import { useRef } from "react";

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

import BackDropMenu from "../components/backdrop/BackdropMenu";
import WebsiteCheckupModal from "../components/calltoaction/WebsiteCheckupModel";

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const whoWeAreRef = useRef(null);
  const reviewsRef = useRef(null);
  const blogRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative">

      <Navbar
        onWhatWeDoClick={() => {
          console.log("What we do clicked");
          setShowDropdown(true);
        }}
        onWhoWeAreClick={() => scrollToSection(whoWeAreRef)}
        onReviewsClick={() => scrollToSection(reviewsRef)}
        onBlogClick={() => scrollToSection(blogRef)}
      />
    
      {showDropdown && (
        <BackDropMenu
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

      <section
        ref={whoWeAreRef}
        className="scroll-mt-20"
      >
        <WhoWeAre />
      </section>

      <WhyChooseUs />

      <section ref={reviewsRef}>
        <Statistics />
      </section>

      <WhatWeDo />
      <Strategy />

      <section ref={blogRef}>
        <Blog />
      </section>

      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;