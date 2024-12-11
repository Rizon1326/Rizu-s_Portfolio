import { FaBrain, FaGlobe} from "react-icons/fa"; 
import { SiAntdesign } from "react-icons/si"; 
import { FaCode } from 'react-icons/fa';

export const featuresData = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Front-End Development",
    des: "Crafting intuitive and visually appealing user interfaces with modern web technologies to deliver seamless user experiences.",
    expertise: [
      "Responsive Web Design",
      "Interactive User Interfaces",
      "Performance Optimization",
      "Cross-Browser Compatibility"
    ],
    technologies: [
      "React", 
      "Node.js", 
      "Tailwind CSS", 
      "Java Script", 
      "HTML5", 
      "CSS3"
    ]
  },
  {
    id: 2,
    icon: <SiAntdesign />,
    title: "UI/UX Design",
    des: "Designing user-centric interfaces that combine functionality with aesthetics to create compelling digital experiences.",
    expertise: [
      "User Research",
      "Wireframing & Prototyping",
      "Design Systems",
      "Interaction Design"
    ],
    technologies: [
      "Figma", 
      "Prototype Design"
    ]
  },
  {
    id: 3,
    icon: <FaGlobe />,
    title: "Hosting Websites",
    des: "Providing reliable and scalable hosting solutions to ensure your website remains fast, secure, and always accessible.",
    expertise: [
      "Cloud Deployment",
      "Performance Monitoring"
    ],
    technologies: [
      "Vercel", 
      "Netlify", 
      "Git Action"
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
      "Neural Network Design",
      "Predictive Analytics"
    ],
    technologies: [
      "TensorFlow", 
      "PyTorch", 
      "Scikit-learn", 
      "Keras", 
      "Pandas"
    ]
  }
];