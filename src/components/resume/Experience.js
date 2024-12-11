import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - present</p>
          <h2 className="text-4xl font-bold">Co-curricular Experiences</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Active Member"
            subTitle="ALO(a non-profit organiztion for science and math olympiad) - (2016 - 2021)"
            result="Mymensingh"
            des="An organization like this primarily helps to increase school students' interest in math and science by supporting them with learning resources."
          />
          <ResumeCard
            title="Organizing Secretary"
            subTitle="IIT Debating Club - (2024 - Present)"
            result="IIT,University of Dhaka"
            des="The IIT Debating Club, established in 2024 at the University of Dhaka, is a dynamic platform dedicated to fostering critical thinking, public speaking, and debate culture among students."
          />
          <ResumeCard
            title="Information and Communication Secretary"
            subTitle="Dhaka University Student Association of Trishal - (2024 - Present)"
            result="University of Dhaka"
            des="An organization that primarily works for the welfare of students from Trishal Upazila studying at Dhaka University."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
