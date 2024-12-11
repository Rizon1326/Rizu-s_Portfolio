import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import AboutMe from './AboutMe'; // Import AboutMe component
import Achievement from './Achievement';
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  const [aboutMeData, setAboutMeData] = useState(false); // State for About Me

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="1+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setExperienceData(false) &
              setAchievementData(false) &
              setAboutMeData(false) // Close AboutMe
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setExperienceData(true) &
              setAchievementData(false) &
              setAboutMeData(false) // Close AboutMe
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setExperienceData(false) &
              setAchievementData(true) &
              setAboutMeData(false) // Close AboutMe
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setExperienceData(false) &
              setAchievementData(false) &
              setAboutMeData(true) // Show AboutMe
            }
            className={`${
              aboutMeData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            About Me
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
      {aboutMeData && <AboutMe />} {/* Show AboutMe */}
    </section>
  );
}

export default Resume;
