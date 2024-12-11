import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024</p>
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="AI Based Devpost Hackathon 2024"
            subTitle="Champion among 400 teams"
            result="Won"
            des={
              <>
                We won an AI-based web hackathon arranged by Devpost, where our team became champions among 400 teams.{" "}
                <a
                  href="https://devpost.com/software/project-coolcity#updates" // Replace with the actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Event Link
                </a>
              </>
            }
          />
          <ResumeCard
            title="BUET CSE Fest 2024 AI & API Hackathon Finalist"
            subTitle="Top 10 teams"
            result="Finalist"
            des={
              <>
                My team, Intifada-24, secured a position among the top 10 teams. We developed a project using AI models and various free APIs.{" "}
                <a
                  href="https://github.com/Rizon1326/TripMinds" // Replace with the actual project link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Project Link - TripMinds
                </a>
              </>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
