import React from "react";
import EducationComponent from "../components/EducationComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import CertificateComponent from "../components/CertificateComponent";

function Experience() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-7">
      <EducationComponent />
      <ExperienceComponent />
      <CertificateComponent />
    </div>
  );
}

export default Experience;
