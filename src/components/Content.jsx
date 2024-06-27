import React from "react";

function Content({ children }) {
  return (
    <div className="px-10 my-10 border shadow-md py-7 bg-frost-dark-light dark:bg-frost-dark-shade rounded-2xl border-neutral-900/10 dark:border-neutral-100/10">
      {children}
    </div>
  );
}

export default Content;
