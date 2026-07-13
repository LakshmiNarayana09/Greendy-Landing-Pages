import React from "react";
import { ChevronDown } from "lucide-react";
import { menuLinks } from "./footerData";

function FooterMenu() {
  return (
    <div>

      <h3 className="text-lg text-white mb-4">
        Menu
      </h3>

      <ul className="space-y-3">

        {menuLinks.map((item) => (
          <li
            key={item}
            className="text-white text-sm flex items-center gap-1"
          >
            {item}

            {item === "What we do" && (
              <ChevronDown size={16} />
            )}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default FooterMenu;