import React from "react";
import { motion } from "framer-motion";

function ResponsibilityTile({
  icon,
  company,
  position,
  start,
  end,
  location,
  description,
}) {
  return (
    <motion.div
      whileHover={{ opacity: 0.7 }}
      className="p-6 border bg-frost-lighter-shade dark:bg-frost-darker-shade rounded-2xl border-neutral-900/10 dark:border-neutral-100/10"
    >
      <div className="flex flex-col items-start sm:items-center sm:flex-row gap-x-5 gap-y-3">
        <div className="p-3 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10">
          {icon}
        </div>
        <div className="flex flex-col w-full sm:items-center sm:justify-between sm:flex-row">
          <div>
            <p className="text-lg font-bold">{company}</p>
            <p className="text-sm">{position}</p>
          </div>
          <div className="sm:text-right">
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
    </motion.div>
  );
}

export default ResponsibilityTile;
