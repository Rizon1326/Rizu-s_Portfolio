import React, { useState } from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import Title from '../layouts/Title';
import { mern1, AI_ML,ui_ux1  } from "../../assets/index";

// Project data with added type and details
const projectsData = [
  {
    id: 1,
    title: "E-Waste Management",
    des: "My first machine learning project using Machine Learning to achieve SDG goal",
    src: AI_ML,
    type: "AI/ML",
    technologies: ["Pytorch","Tensorflow","Streamlit", "scikit-learn"],
    githubLink: "https://github.com/Rizon1326/E-Waste",
    liveLink: "#"
  },
  {
    id: 2,
    title: "FOOD DELIVERY APP",
    des: "A full-stack food delivery app with ordering food and delivering food products",
    src: mern1,
    type: "MERN",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    githubLink: "https://github.com/Rizon1326/mernFoodApp",
    liveLink: "#"
  },
  {
    id: 3,
    title: "BuddhirBati",
    des: "A full-stack web application to develop a app like mini stack overflow",
    src: mern1,
    type: "MERN",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    githubLink: "https://github.com/Rizon1326/BuddhirBati",
    liveLink: "#"
  },
  //https://github.com/Rizon1326/BuddhirBati
  // Duplicate projects with different types to demonstrate variety
  {
    id: 4,
    title: "MINI CHESS AI",
    des: "AI-Powered Game Using the MERN Stack",
    src: AI_ML,
    type: "AI/ML",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    githubLink: "https://github.com/Rizon1326/Mini_Chess_AI",
    liveLink: "#"
  },
  
  {
    id: 5,
    title: "IIT Resource and Lab Management(IITRLM)",
    des: "A full-stack MERN project designed to manage IIT lab and class scheduling efficiently, addressing the challenges of limited resources",
    src: mern1,
    type: "MERN",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    githubLink: "https://github.com/Rizon1326/SPL-II-1",
    liveLink: "#"
  },
  {
    id: 6,
    title: "Movie Review Sentiment Analysis App",
    des: "A movie review sentiment analysis app using ML model and streamlit",
    src: AI_ML,
    type: "AI/ML",
    technologies: ["Streamlit", "NLTK", "Scikit-learn"],
    githubLink: "https://github.com/Rizon1326/Movie-Review-Sentiment-Analysis",
    liveLink: "#"
  },
  
  {
    id: 7,
    title: "Cool City",
    des: "AI powered project using MERN",
    src: mern1,
    type: "MERN",
    technologies: ["MongoDB", "Express", "React", "Node.js","OpenAI"],
    githubLink: "https://github.com/Rizon1326/AI-for-Change-Hackathon",
    liveLink: "#"
  },
  {
    id: 8,
    title: "City Garden",
    des: "An UI/UX design to develop a Gardening App for urban areas",
    src: ui_ux1,
    type: "UI/UX",
    technologies: ["Figma"],
    githubLink: "https://www.figma.com/proto/wVHqZJOPaMX3yNDOGSHPFQ/areYouReady!?node-id=55-55&starting-point-node-id=55%3A55",
    liveLink: "https://www.figma.com/proto/wVHqZJOPaMX3yNDOGSHPFQ/areYouReady!?node-id=55-55&starting-point-node-id=55%3A55"
  },
  {
    id: 9,
    title: "Resume Screening App",
    des: "A resume screening App using ML model and streamlit",
    src: AI_ML,
    type: "AI/ML",
    technologies: ["Streamlit", "nltk", "scikit-learn"],
    githubLink: "https://github.com/Rizon1326/Resume_Screening_Tools",
    liveLink: "#"
  },

];

const ProjectsCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne relative 
                 bg-gradient-to-r from-bodyColor to-[#202327] 
                 group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 
                 transition-colors duration-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={project.src}
          alt={project.title}
        />
      </div>

      {/* Project Details */}
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {project.title}
              <span className="ml-2 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                {project.type}
              </span>
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <BsGithub />
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <FaGlobe />
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {project.des}
          </p>
        </div>
      </div>

      {/* Hover Details Overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-4 flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-center mb-4">{project.des}</p>
          <div className="mb-4">
            <h4 className="text-base font-semibold">Technologies:</h4>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-designColor text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded hover:bg-designColor transition"
            >
              <BsGithub /> GitHub
            </a>
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded hover:bg-designColor transition"
            >
              <FaGlobe /> Live Site
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  // Group projects by type
  const projectTypes = ['All', ...new Set(projectsData.map(project => project.type))];
  const [selectedType, setSelectedType] = useState('All');

  // Filter projects based on selected type
  const filteredProjects = selectedType === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.type === selectedType);

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PROJECTS AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      {/* Project Type Filter */}
      <div className="flex justify-center mb-8 space-x-4">
        {projectTypes.map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded transition duration-300 ${
              selectedType === type 
                ? 'bg-designColor text-white' 
                : 'bg-gray-200 text-black hover:bg-designColor hover:text-white'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {filteredProjects.map(project => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;