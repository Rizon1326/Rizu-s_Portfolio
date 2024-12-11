import React, { useState } from 'react';
import { HiArrowRight } from "react-icons/hi";

const Card = ({item:{title, des, icon, expertise, technologies}}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-72 overflow-y-hidden">
        <div className={`flex h-full flex-col gap-10 ${isHovered ? 'translate-y-0' : 'translate-y-16'} transition-transform duration-500`}>
          {/* Icon section - now conditionally rendered */}
          {!isHovered && (
            <div className="w-10 h-8 flex flex-col justify-between">
              {icon ? (
                <span className="text-5xl text-designColor">{icon}</span>
              ) : (
                <>
                  <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                  <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                  <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                  <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                </>
              )}
            </div>
          )}
          
          {/* Default Content */}
          <div className={`flex flex-col gap-6 ${isHovered ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base">{des}</p>
            <span className="text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
          
          {/* Hover Content */}
          <div className={`absolute inset-0 p-6 flex flex-col justify-center ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-300`}>
            <h3 className="text-xl font-bold text-designColor mb-2">Expertise</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              {expertise && expertise.map((exp, index) => (
                <li key={index} className="text-sm">{exp}</li>
              ))}
            </ul>
            <h3 className="text-xl font-bold text-designColor mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies && technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-[#1e2024] text-designColor text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;