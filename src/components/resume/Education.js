import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
         
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc Software Engineering"
            subTitle="University of DVI (2021 - present)"
            des="I am software Engineering student at the University of Dhaka under the Institution of the University of Information Technology"
          />
          <ResumeCard
            title="Higher Secondary School Certificate"
            subTitle="Govt. Ananda Mohan College,Mymensingh(2018 - 2020)"
            result="5.00/5.00"
           />
          <ResumeCard
            title="Secondary School Certificate"
            subTitle="Mymensingh Zilla School,Mymensingh(2016-2018)"
            result="5.00/5.00"
             />
        </div>
      </div>
    </motion.div>
  );
}

export default Education