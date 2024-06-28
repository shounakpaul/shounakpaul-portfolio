import React from "react";
import Pic from "../assets/nav_logo.png";

function ProfilePic() {
  return (
    <div className="flex flex-row items-center justify-center gap-x-3">
      <div className="border rounded-full bg-neutral-100 dark:bg-neutral-900 border-neutral-900/10 dark:border-neutral-100/10">
        <img src={Pic} alt="Profile" className="w-20 h-20 rounded-full" />
      </div>
      <div className="font-bold " id="name-tag">
        <p>Shounak</p>
        <p>Paul</p>
      </div>
    </div>
  );
}

export default ProfilePic;
