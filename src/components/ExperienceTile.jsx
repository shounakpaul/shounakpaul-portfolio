import React from "react";

function ExperienceTile({
  icon,
  company,
  position,
  start,
  end,
  location,
  description,
}) {
  return (
    <div className="p-4 border bg-frost-lighter-shade dark:bg-frost-darker-shade rounded-2xl border-neutral-900/10 dark:border-neutral-100/10">
      <div className="flex items-center p-2 gap-x-5">
        <div className="p-3 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10">
          {icon}
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <div>
            <p className="text-lg font-bold">{company}</p>
            <p className="text-sm">{position}</p>
          </div>
          <div className="text-right">
            <p className="text-sm">
              {start} - {end}
            </p>
            <p className="text-sm">{location}</p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

export default ExperienceTile;
