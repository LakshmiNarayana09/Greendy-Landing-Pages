import React from "react";
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

function Footer() {
  return (
    <footer className="bg-[#161E2E] py-12">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-[130px]">

        

        <div className="flex flex-col lg:flex-row justify-between gap-12">

          <FooterLogo />

          <FooterMenu />

          <FooterContact />

          <FooterSocial />

        </div>

        

        <div className="border-t border-[#2FDF84] mt-12"></div>

        

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">

          <p className="text-white text-base">
            Copyright 2021 Greendy All Right Reserve
          </p>

          <div className="flex gap-8 text-white">
            <a href="#">Term of use</a>
            <a href="#">Privacy Policy</a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;