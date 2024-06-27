import React from "react";
import DarkMode from "./DarkMode";
import ProfilePic from "./ProfilePic";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between px-10 border shadow-md py-7 bg-frost-dark-light dark:bg-frost-dark-shade rounded-2xl border-neutral-900/10 dark:border-neutral-100/10 ">
      <ProfilePic />
      <NavLinks />
      <DarkMode />
    </div>
  );
}

export default Navbar;
