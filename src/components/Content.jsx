import React from "react";

function Content({ children }) {
  return (
    <div className="px-5 md:px-10 md:my-10 my-5 min-h-[70dvh] border shadow-md py-7 bg-frost-dark-light dark:bg-frost-dark-shade rounded-2xl border-neutral-900/10 dark:border-neutral-100/10">
      {children}
    </div>
  );
}

export default Content;
