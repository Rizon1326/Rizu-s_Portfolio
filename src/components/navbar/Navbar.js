import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaEnvelope,FaGithub,FaWhatsapp,FaTelegram, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
<div className="flex items-center space-x-4">
      <img 
        src={logo} 
        alt="Rizon Logo" 
        className="w-20 h-auto" 
      />
      <h2 className="text-4xl font-semibold text-white-800 
        tracking-tight 
        border-b-2 border-blue-500 
        pb-1 
        transition-colors duration-300 
        hover:text-blue-600">
        Rizon
      </h2>
    </div>

      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) =>
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          )}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu &&
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                I am a passionate professional coder, full-stack developer, and UI designer with a growing interest in AI research. I enjoy building intuitive and efficient solutions, creating seamless user experiences, and exploring innovative technologies in artificial intelligence.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map(item =>
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                )}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>}
      </div>
    </div>
  );
};

export default Navbar;
