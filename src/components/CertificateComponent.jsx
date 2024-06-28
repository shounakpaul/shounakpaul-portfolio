import React from "react";
import CertificateTile from "./CertificateTile";
import { TbCertificate } from "react-icons/tb";

function CertificateComponent() {
  return (
    <div className="xl:w-[60%] lg:w-[70%] w-[95%]">
      <p className="text-3xl font-bold mb-7 ">Certificates</p>
      <div className="relative flex flex-col w-full pl-10 border-l-4 gap-y-5 border-frost-lighter-shade dark:border-frost-darker-shade">
        {/* Wrap EducationTile in a container and add a custom class for the line */}
        <div className="relative before:absolute before:top-1/2 before:-left-10 before:transform before:-translate-y-1/2 before:w-10 before:h-0.5 before:bg-frost-lighter-shade dark:before:bg-frost-darker-shade after:absolute after:top-1/2 after:-left-12 after:transform after:-translate-y-1/2 after:w-3 after:h-3 after:bg-frost-darker-shade dark:after:bg-frost-lighter-shade after:rounded-full">
          <CertificateTile
            icon={<TbCertificate />}
            title="Python for Machine Learning & Data Science Masterclass"
            organization="Udemy"
            date="2024"
            link="https://www.udemy.com/certificate/UC-45c490c5-4957-49fa-b6b9-63427b247d26/"
          />
        </div>
        <div className="relative before:absolute before:top-1/2 before:-left-10 before:transform before:-translate-y-1/2 before:w-10 before:h-0.5 before:bg-frost-lighter-shade dark:before:bg-frost-darker-shade after:absolute after:top-1/2 after:-left-12 after:transform after:-translate-y-1/2 after:w-3 after:h-3 after:bg-frost-darker-shade dark:after:bg-frost-lighter-shade after:rounded-full">
          <CertificateTile
            icon={<TbCertificate />}
            title="React - The Complete Guide (incl. Next.js, Redux)"
            organization="Udemy"
            date="2023"
            link="https://www.udemy.com/certificate/UC-9fa9cbef-2bc6-4ebe-a766-93f275e3ac2d/"
          />
        </div>
        <div className="relative before:absolute before:top-1/2 before:-left-10 before:transform before:-translate-y-1/2 before:w-10 before:h-0.5 before:bg-frost-lighter-shade dark:before:bg-frost-darker-shade after:absolute after:top-1/2 after:-left-12 after:transform after:-translate-y-1/2 after:w-3 after:h-3 after:bg-frost-darker-shade dark:after:bg-frost-lighter-shade after:rounded-full">
          <CertificateTile
            icon={<TbCertificate />}
            title="The Complete Web Development Bootcamp"
            organization="Udemy"
            date="2023"
            link="https://www.udemy.com/certificate/UC-e822b285-2d67-4383-ab51-a7a1e9ff44e1/"
          />
        </div>
      </div>
    </div>
  );
}

export default CertificateComponent;
