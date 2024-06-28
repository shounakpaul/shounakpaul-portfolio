import React from "react";
import ExperienceTile from "./ExperienceTile";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

function ExperienceComponent() {
  return (
    <div className="xl:w-[60%] lg:w-[70%] w-[95%]">
      <p className="text-3xl font-bold mb-7 ">Experience</p>
      <div className="relative flex flex-col w-full pl-10 border-l-4 gap-y-5 border-frost-lighter-shade dark:border-frost-darker-shade">
        {/* Wrap EducationTile in a container and add a custom class for the line */}
        <div className="relative before:absolute before:top-1/2 before:-left-10 before:transform before:-translate-y-1/2 before:w-10 before:h-0.5 before:bg-frost-lighter-shade dark:before:bg-frost-darker-shade after:absolute after:top-1/2 after:-left-12 after:transform after:-translate-y-1/2 after:w-3 after:h-3 after:bg-frost-darker-shade dark:after:bg-frost-lighter-shade after:rounded-full">
          <ExperienceTile
            icon={<HiOutlineBuildingOffice2 />}
            company="Oasis Infotech"
            position="Intern"
            start="Jun 2021"
            end="Jul 2021"
            location={"Remote"}
            description={
              "Designed and implemented an intuitive admin dashboard for managing pizza orders, menu items, and user accounts. Integrated real-time data updates and notifications to keep admins informed of new orders and user activities."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ExperienceComponent;
