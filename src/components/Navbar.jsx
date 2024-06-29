import React from "react";
import DarkMode from "./DarkMode";
import ProfilePic from "./ProfilePic";
import NavLinks from "./NavLinks";
import MobileNavMenu from "./MobileNavMenu";

function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between px-4 border py-7 sm:px-10 sm:py-7 bg-frost-light-shade dark:bg-frost-dark-shade rounded-2xl border-neutral-900/10 dark:border-neutral-100/10 ">
      <ProfilePic />
      <NavLinks className="hidden lg:block" />
      <DarkMode className="hidden lg:flex" />
      <MobileNavMenu className="flex lg:hidden" />
    </div>
  );
}

export default Navbar;
