import React from "react";
import { socialLinks } from "./footerData";

function FooterSocial() {
  return (
    <div className="flex gap-8">

      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.id}
            href={item.href}
            className="text-[#00B871] hover:text-white transition"
          >
            <Icon size={32} />
          </a>
        );
      })}

    </div>
  );
}

export default FooterSocial;