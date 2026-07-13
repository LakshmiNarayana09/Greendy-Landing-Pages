import React from "react";
import { contact } from "./footerData";

function FooterContact() {
  return (
    <div>

      <h3 className="text-lg text-white mb-4">
        Contact
      </h3>

      <p className="text-[#00B871] text-lg mb-6">
        {contact.phone}
      </p>

      <p className="text-[#00B871] text-lg">
        {contact.email}
      </p>

    </div>
  );
}

export default FooterContact;