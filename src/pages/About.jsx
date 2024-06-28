import React from "react";
import Pic from "../assets/main.png";
import AboutSkills from "../components/AboutSkills";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { FaMobile } from "react-icons/fa";
import { ImPaintFormat } from "react-icons/im";

function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-7">
      <div className="flex flex-col items-center justify-center gap-y-5 w-[35%]">
        <img
          src={Pic}
          alt="main"
          className="border-4 rounded-full w-72 h-72 border-neutral-900/10 dark:border-neutral-100/10"
        />
        <p className="text-5xl" id="name-tag">
          Shounak Paul
        </p>
      </div>
      <div className="w-[35%]">
        <p className="text-lg text-center">
          Hey there! I'm Shounak Paul, a software developer and data scientist
          who loves tackling complex problems and turning ideas into reality.
          With a solid background in both software engineering and data science,
          I enjoy blending my technical skills with analytical thinking to
          create meaningful and efficient solutions.
        </p>
      </div>
      <div className="w-[35%] flex flex-col gap-y-5 mt-5 ">
        <p className="text-2xl font-bold text-center">What I'm Doing</p>
        <div className="flex flex-wrap gap-3 text-lg">
          <AboutSkills
            logo={
              <IoMdAnalytics className="text-2xl text-neutral-900 dark:text-neutral-100" />
            }
            title="Data Science"
          />
          <AboutSkills
            logo={
              <FaGlobeAmericas className="text-2xl text-neutral-900 dark:text-neutral-100" />
            }
            title="Web Development"
          />
          <AboutSkills
            logo={
              <FaMobile className="text-2xl text-neutral-900 dark:text-neutral-100" />
            }
            title="Mobile Development"
          />
          <AboutSkills
            logo={
              <ImPaintFormat className="text-2xl text-neutral-900 dark:text-neutral-100" />
            }
            title="UI/UX Designing"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
