import React from "react";
import ResponsibilityTile from "./ResponsibilityTile";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

function ResponsibilityComponent() {
  return (
    <div className="xl:w-[60%] lg:w-[70%] w-[95%]">
      <p className="text-3xl font-bold mb-7 ">Roles of Responsibility</p>
      <div className="relative flex flex-col w-full pl-10 border-l-4 gap-y-5 border-frost-lighter-shade dark:border-frost-darker-shade">
        {/* Wrap EducationTile in a container and add a custom class for the line */}
        <div className="relative before:absolute before:top-1/2 before:-left-10 before:transform before:-translate-y-1/2 before:w-10 before:h-0.5 before:bg-frost-lighter-shade dark:before:bg-frost-darker-shade after:absolute after:top-1/2 after:-left-12 after:transform after:-translate-y-1/2 after:w-3 after:h-3 after:bg-frost-darker-shade dark:after:bg-frost-lighter-shade after:rounded-full">
          <ResponsibilityTile
            icon={<HiOutlineBuildingOffice2 />}
            company="TEDxNIITUniversity"
            position="Technical Core"
            start="Jul 2022"
            end="Jul 2023"
            location={"Neemrana, Rajasthan"}
            description={
              "Led a team of 20 members to design and develop the main event website using HTML, CSS, Bootstrap, and JavaScript. Implemented a secure e-ticketing system with QR codes and encryption, facilitating ticket distribution for over 100 attendees. Fostered collaboration and ensured timely project milestone delivery."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ResponsibilityComponent;
