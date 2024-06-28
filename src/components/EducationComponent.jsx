import React from "react";
import EducationTile from "./EducationTile";
import { LiaUniversitySolid } from "react-icons/lia";

function EducationComponent() {
  return (
    <div className="xl:w-[60%] lg:w-[70%] w-[95%]">
      <p className="text-3xl font-bold mb-7 ">Education</p>
      <div className="relative flex flex-col w-full pl-10 border-l-4 gap-y-5 border-frost-lighter-shade dark:border-frost-darker-shade">
        {/* Wrap EducationTile in a container and add a custom class for the line */}
        <div className="relative before:absolute before:top-1/2 before:-left-10 before:transform before:-translate-y-1/2 before:w-10 before:h-0.5 before:bg-frost-lighter-shade dark:before:bg-frost-darker-shade after:absolute after:top-1/2 after:-left-12 after:transform after:-translate-y-1/2 after:w-3 after:h-3 after:bg-frost-darker-shade dark:after:bg-frost-lighter-shade after:rounded-full">
          <EducationTile
            icon={<LiaUniversitySolid />}
            title="NIIT University"
            course="BTech: CSE (Data Science Specialization)"
            start="2021"
            end="2025"
            location={"Neemrana, Rajasthan"}
          />
        </div>
        <div className="relative before:absolute before:top-1/2 before:-left-10 before:transform before:-translate-y-1/2 before:w-10 before:h-0.5 before:bg-frost-lighter-shade dark:before:bg-frost-darker-shade after:absolute after:top-1/2 after:-left-12 after:transform after:-translate-y-1/2 after:w-3 after:h-3 after:bg-frost-darker-shade dark:after:bg-frost-lighter-shade after:rounded-full">
          <EducationTile
            icon={<LiaUniversitySolid />}
            title="South Point High School"
            course="High School Diploma"
            start="2014"
            end="2021"
            location={"Kolkata, West Bengal"}
          />
        </div>
      </div>
    </div>
  );
}

export default EducationComponent;
