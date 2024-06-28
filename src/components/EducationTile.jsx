import React from "react";
import { motion } from "framer-motion";

function EducationTile({ icon, title, course, start, end, location }) {
  return (
    <motion.div
      whileHover={{ opacity: 0.7 }}
      className="p-4 border bg-frost-lighter-shade dark:bg-frost-darker-shade rounded-2xl border-neutral-900/10 dark:border-neutral-100/10"
    >
      <div className="flex flex-col items-start p-2 sm:flex-row sm:items-center gap-x-5 gap-y-3">
        <div className="p-3 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10">
          {icon}
        </div>
        <div className="flex flex-col justify-between w-full sm:items-center sm:flex-row gap-y-2">
          <div>
            <p className="text-lg font-bold">{title}</p>
            <p className="text-sm">{course}</p>
          </div>
          <div className="sm:text-right">
            <p className="text-sm">
              {start} - {end}
            </p>
            <p className="text-sm">{location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EducationTile;
