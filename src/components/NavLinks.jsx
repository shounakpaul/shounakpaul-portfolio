import React from "react";

function NavLinks() {
  return (
    <div className="flex flex-row items-center text-lg gap-x-4">
      <a href="/" className="">
        About
      </a>
      <a href="#" className="">
        Education
      </a>
      <a href="#" className="">
        Experience
      </a>
      <a href="#" className="">
        Projects
      </a>
      <a href="#" className="">
        Certifications
      </a>
      <a href="/contact" className="">
        Contact
      </a>
    </div>
  );
}

export default NavLinks;
