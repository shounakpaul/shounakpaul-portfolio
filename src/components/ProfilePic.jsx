import React from "react";
import Pic from "../assets/nav_logo.png";

function ProfilePic() {
  return (
    <div className="border rounded-full bg-neutral-100 dark:bg-neutral-900 border-neutral-900/10 dark:border-neutral-100/10">
      <img src={Pic} alt="Profile" className="w-16 h-16 rounded-full" />
    </div>
  );
}

export default ProfilePic;
