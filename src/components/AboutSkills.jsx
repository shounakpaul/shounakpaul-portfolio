import React from "react";

function AboutSkills({ logo, title }) {
  return (
    <div className="flex flex-col flex-grow basis-0 flex-wrap min-w-[12dvw] items-center justify-center p-5 border bg-frost-lighter-shade dark:bg-frost-darker-shade gap-y-5 border-neutral-900/10 dark:border-neutral-100/10 rounded-2xl">
      {logo}
      <p className="text-sm text-center">{title}</p>
    </div>
  );
}

export default AboutSkills;
