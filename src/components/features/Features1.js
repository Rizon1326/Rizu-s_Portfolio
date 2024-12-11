import React, { useState } from 'react';
import { FaCode, FaBrain, FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";

const FeatureCard = ({ icon, title, des, expertise, technologies }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative p-6 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default Card Content */}
      <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-20' : 'opacity-100'}`}>
        <div className="text-4xl text-blue-600 mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{des}</p>
      </div>

      {/* Hover Details */}
      {isHovered && (
        <div className="absolute inset-0 p-6 bg-white rounded-lg overflow-hidden z-10 flex flex-col justify-center">
          <h4 className="text-lg font-bold mb-2 text-blue-700">Expertise</h4>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            {expertise.map((item, index) => (
              <li key={index} className="mb-1">{item}</li>
            ))}
          </ul>
          <h4 className="text-lg font-bold mb-2 text-blue-700">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const FeaturesSection = () => {
  const featuresData = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Front-End Development",
      des: "Crafting intuitive and visually appealing user interfaces with modern web technologies to deliver seamless user experiences.",
      expertise: [
        "Responsive Web Design",
        "Interactive UI Development",
        "Performance Optimization"
      ],
      technologies: [
        "React", 
        "Next.js", 
        "Tailwind CSS", 
        "TypeScript"
      ]
    },
    {
      id: 2,
      icon: <SiAntdesign />,
      title: "UI/UX Design",
      des: "Designing user-centric interfaces that combine functionality with aesthetics to create compelling digital experiences.",
      expertise: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Interaction Design"
      ],
      technologies: [
        "Figma", 
        "Adobe XD", 
        "Sketch", 
        "InVision"
      ]
    },
    {
      id: 3,
      icon: <FaGlobe />,
      title: "Hosting Websites",
      des: "Providing reliable and scalable hosting solutions to ensure your website remains fast, secure, and always accessible.",
      expertise: [
        "Cloud Hosting",
        "Server Configuration",
        "Performance Monitoring",
        "Security Optimization"
      ],
      technologies: [
        "AWS", 
        "Vercel", 
        "Netlify", 
        "Docker"
      ]
    },
    {
      id: 4,
      icon: <FaBrain />,
      title: "AI/Machine Learning",
      des: "Developing intelligent systems and predictive models that leverage data to unlock innovative solutions and drive decision-making.",
      expertise: [
        "Machine Learning Modeling",
        "Data Analysis",
        "Natural Language Processing",
        "Predictive Analytics"
      ],
      technologies: [
        "Python", 
        "TensorFlow", 
        "PyTorch", 
        "scikit-learn"
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {featuresData.map((feature) => (
        <FeatureCard 
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          des={feature.des}
          expertise={feature.expertise}
          technologies={feature.technologies}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;