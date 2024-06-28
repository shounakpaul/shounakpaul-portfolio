import React from "react";
import { motion } from "framer-motion";

function ProjectTile({ title, description, techStack, link }) {
  return (
    <motion.div
      whileHover={{ opacity: 0.7 }}
      className="flex flex-grow p-4 min-w-[80%] lg:min-w-[45%] basis-0 border bg-frost-lighter-shade dark:bg-frost-darker-shade rounded-2xl border-neutral-900/10 dark:border-neutral-100/10"
    >
      <div className="flex flex-col p-2 gap-x-5">
        <p className="text-xl font-bold">{title}</p>
        <p className="my-2 text-sm">{description}</p>
        <p className="my-2 font-extralight">Tech Stack: {techStack}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-neutral-500 hover:underline"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectTile;
