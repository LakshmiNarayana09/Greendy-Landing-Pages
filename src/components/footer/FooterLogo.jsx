import React from "react";
import darkLogo from '../../assets/dark-logo.png';


function FooterLogo() {


  return (
    <div className="max-w-[301px]">

      <img
        src={darkLogo}
        alt="Greendy Logo"
        className="cursor-pointer"
        onClick={() => navigate("/")}
      />

      <p className="mt-4 text-sm leading-7 text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Accumsan, pellentesque aenean sed vel non suspendisse.
      </p>

    </div>
  );
}

export default FooterLogo;