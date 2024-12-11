import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegram
} from "react-icons/fa";
// import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa"; // Represents email

import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Khandakar Mehedi Hasan</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        A professional coder, full-stack developer, and UI designer with a growing interest in AI research.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+8801314824297</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">bsse1326@iit.du.ac.bd</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="bsse1326@iit.du.ac.bd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaEnvelope />
            </span>
          </a>

          <a
            href="https://www.facebook.com/mehedi.hasan.rizon.2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a
            href="https://github.com/Rizon1326"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/khandakar-mehedi-hasan-aa9688323/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/khandakar-mehedi-hasan-aa9688323/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaWhatsapp />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/khandakar-mehedi-hasan-aa9688323/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaTelegram />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
