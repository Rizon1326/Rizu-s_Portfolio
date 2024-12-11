import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import the icons

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Name"
            subTitle="Khandakar Mehedi Hasan"
            des="A passionate professional coder, full-stack developer, and UI designer with a growing interest in AI research."
          />
          <ResumeCard
            title="Profession"
            subTitle="Full Stack Developer"
            des="I specialize in the MERN stack and enjoy building intuitive and efficient solutions, creating seamless user experiences, and exploring innovative technologies in artificial intelligence."
          />
          <ResumeCard
            title="Phone"
            subTitle={<><FaPhoneAlt className="mr-2" /> +8801314824297</>}
            des="Feel free to reach out if you want to discuss development, AI research, or potential collaborations."
          />
          <ResumeCard
            title="Email"
            subTitle={<><FaEnvelope className="mr-2" /> bsse1326@iit.du.ac.bd</>}
            des="You can email me anytime for inquiries or opportunities."
          />
          <ResumeCard
            title="Address"
            subTitle={<><FaMapMarkerAlt className="mr-2" /> Dhaka 1000, Bangladesh</>}
            des="I am based in Dhaka, Bangladesh, and open to remote work or in-person collaboration."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
