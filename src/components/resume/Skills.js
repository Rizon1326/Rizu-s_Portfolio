import React from 'react';
import { 
  FaReact, FaPython, FaNodeJs, FaGithub, 
  FaDocker, FaDatabase, FaCode, FaServer, 
  FaCloudUploadAlt, FaBoxOpen
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiCss3, SiExpress, 
  SiMongodb, 
  SiFastapi, SiNextdotjs, 
  SiTypescript, SiJavascript 
} from 'react-icons/si';
import { motion } from 'framer-motion';
import Title from '../layouts/Title';

// Skill category configuration
const skillCategories = [
  {
    title: 'Frontend',
    icon: <FaCode className="text-blue-500" />,
    skills: [
      { name: 'React', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
      { name: 'CSS', icon: <SiCss3 className="text-blue-600" /> }
    ]
  },
  {
    title: 'Backend',
    icon: <FaServer className="text-green-500" />,
    skills: [
      { name: 'Express.js', icon: <SiExpress className="text-gray-500" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-green-600" /> },
      { name: 'Python', icon: <FaPython className="text-blue-600" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> }
    ]
  },
  {
    title: 'Databases',
    icon: <FaDatabase className="text-red-500" />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'MySQL', icon: <FaDatabase className="text-orange-600" /> }
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: <FaGithub className="text-purple-500" />,
    skills: [
      { name: 'GitHub', icon: <FaGithub className="text-gray-500" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-600" /> },
      { name: 'Cloudinary', icon: <FaCloudUploadAlt className="text-blue-400" /> },
      { name: 'Minio', icon: <FaBoxOpen className="text-gray-700" /> }
    ]
  }
];

const DynamicLines = ({ color }) => {
  return (
    <motion.svg 
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
      preserveAspectRatio="none"
    >
      {/* Top Line */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: [0.2, 0.5, 0.2],
          transition: { 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut" 
          }
        }}
        d="M0,10 Q100,50 200,10"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeOpacity="0.7"
        className="opacity-50"
      />

      {/* Bottom Line */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: [0.2, 0.5, 0.2],
          transition: { 
            duration: 3, 
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut" 
          }
        }}
        d="M0,50 Q150,10 300,50"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeOpacity="0.7"
        className="opacity-50"
      />
    </motion.svg>
  );
};

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        rotate: 5,
        transition: { duration: 0.2 }
      }}
      className="flex items-center bg-gray-800 p-3 rounded-lg shadow-lg 
                 transform transition-all duration-300 
                 hover:shadow-2xl hover:bg-gray-700 relative z-10"
    >
      <div className="mr-3 text-2xl">{skill.icon}</div>
      <span className="text-white text-sm">{skill.name}</span>
    </motion.div>
  );
};

const Skills = () => {
  // Color palette for dynamic lines
  const lineColors = [
    'rgba(239, 68, 68, 0.6)',    // Red
    'rgba(245, 158, 11, 0.6)',   // Amber
    'rgba(34, 197, 94, 0.6)',    // Green
    'rgba(59, 130, 246, 0.6)'    // Blue
  ];

  return (
    <section 
      id="skills" 
      className="w-full py-20 border-b-[1px] border-b-black relative overflow-hidden"
    >
      {/* Animated Background Curve */}
      <svg 
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" 
        preserveAspectRatio="none" 
        viewBox="0 0 1440 320"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.3,
            transition: { 
              duration: 2, 
              ease: "easeInOut" 
            }
          }}
          d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,154.7C672,139,768,117,864,122.7C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0L192,0L96,0L0,0Z"
          fill="#4A5568"
          fillOpacity="0.5"
          stroke="#4A5568"
          strokeWidth="2"
          strokeOpacity="0.5"
        />
      </svg>
      
      <div className="flex justify-center items-center text-center relative z-10">
        <Title
          title="PROFESSIONAL SKILLS AND TECHNOLOGIES"
          des="My Technical Expertise"
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -50 : 50,
                rotate: index % 2 === 0 ? -5 : 5
              }}
              animate={{ 
                opacity: 1, 
                x: 0,
                rotate: 0
              }}
              whileHover={{
                scale: 1.05,
                rotate: index % 2 === 0 ? -3 : 3,
                transition: { duration: 0.3 }
              }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.5,
                type: "spring",
                stiffness: 120
              }}
              className="bg-gray-900 rounded-lg p-6 shadow-xl relative overflow-hidden
                         before:absolute before:inset-0 before:bg-gradient-to-br 
                         before:from-transparent before:to-gray-800 
                         before:opacity-0 hover:before:opacity-20 
                         before:transition-opacity before:duration-300"
            >
              {/* Dynamic Colorful Lines */}
              <DynamicLines color={lineColors[index % lineColors.length]} />

              <div className="flex items-center mb-4 relative z-10">
                <div className="text-3xl mr-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3 relative z-10">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;