import React from "react";
import EducationComponent from "../components/EducationComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import CertificateComponent from "../components/CertificateComponent";
import ResponsibilityComponent from "../components/ResponsibilityComponent";

function Experience() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-7">
      <ExperienceComponent />
      <ResponsibilityComponent />
      <EducationComponent />
      <CertificateComponent />
    </div>
  );
}

export default Experience;
