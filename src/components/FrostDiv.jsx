import React from "react";

function FrostDiv({ children, className, onClick }) {
  return (
    <div
      className={
        "bg-gradient-to-tr from-neutral-200 to-neutral-300 backdrop-blur-md rounded-2xl"
      }
      onClick={onClick}
    >
      <div
        className={
          "backdrop-blur-lg rounded-2xl bg-white/70 dark:bg-black/70 " +
          className
        }
      >
        {children}
      </div>
    </div>
  );
}

export default FrostDiv;
