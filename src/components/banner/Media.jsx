import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn,FaWhatsapp, FaTelegram } from "react-icons/fa";
// import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FaEnvelope } from 'react-icons/fa'; // Represents email

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
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
      <div>
        
       
      </div>
    </div>
  );
};

export default Media;
