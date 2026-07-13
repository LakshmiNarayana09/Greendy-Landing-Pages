import React from "react";
import { X } from "lucide-react";

function WebsiteCheckupModal({ onClose }) {
  const handleClose = () => {
    onClose?.();
  };

  const inputClass = `
    w-full
    h-12
    md:h-[51px]
    rounded-[11px]
    border
    border-[#9BA4B0]
    px-4
    md:px-5
    outline-none
    transition-all
    duration-300
    bg-white
    hover:border-[#00B871]
    hover:shadow-[0_0_0_4px_rgba(47,223,132,0.25)]
    focus:border-[#00B871]
    focus:shadow-[0_0_0_4px_rgba(47,223,132,0.25)]
  `;

  return (
    <div
      className="
        relative
        w-full
        max-w-[734px]
        mx-auto
        rounded-xl
        bg-white
        shadow-[0px_6px_16px_4px_rgba(47,223,132,0.15)]
        p-6
        sm:p-8
        lg:p-12
      "
    >
      
      <button
        onClick={handleClose}
        className="
          absolute
          top-4
          right-4
          sm:-top-5
          sm:-right-5
          w-10
          h-10
          sm:w-12
          sm:h-12
          rounded-full
          bg-white
          shadow-lg
          flex
          items-center
          justify-center
          hover:bg-gray-100
          transition
        "
      >
        <X
          size={20}
          className="sm:w-6 sm:h-6 text-[#161E2E]"
        />
      </button>

      
      <div className="max-w-[520px]">
        <h2
          className="
            text-[26px]
            sm:text-[30px]
            lg:text-[32px]
            leading-tight
            font-normal
            text-black
          "
        >
          Get Your Free Website Checkup
        </h2>

        <p
          className="
            mt-4
            lg:mt-6
            text-base
            lg:text-lg
            leading-7
            text-[#161E2E]
          "
        >
          Discover main benefits and issues of your website and how to fix
          them.
        </p>
      </div>

      
      <form className="mt-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name*"
            className={inputClass}
          />

          <input
            type="email"
            placeholder="Email Address*"
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Phone Number"
            className={inputClass}
          />

          <input
            type="text"
            placeholder="Website URL"
            className={inputClass}
          />
        </div>

        <textarea
          rows={5}
          placeholder="Message..."
          className="
            w-full
            rounded-[11px]
            border
            border-[#9BA4B0]
            px-4
            md:px-5
            py-4
            resize-none
            outline-none
            transition-all
            duration-300
            hover:border-[#00B871]
            hover:shadow-[0_0_0_4px_rgba(47,223,132,0.25)]
            focus:border-[#00B871]
            focus:shadow-[0_0_0_4px_rgba(47,223,132,0.25)]
          "
        />

        <button
          type="submit"
          className="
            w-full
            sm:w-auto
            h-12
            px-8
            rounded
            bg-[#00B871]
            text-white
            transition-all
            duration-300
            hover:bg-[#009E60]
            hover:shadow-lg
          "
        >
          Get My Free Checkup
        </button>
      </form>
    </div>
  );
}

export default WebsiteCheckupModal;