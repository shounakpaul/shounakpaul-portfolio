import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbMenuDeep } from "react-icons/tb";
import { IoChevronBackOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom"; // Import NavLink
import DarkMode from "./DarkMode";

const HamburgerMenu = ({ onClick }) => (
  <button className="hamburger-menu" onClick={onClick}>
    <TbMenuDeep className="text-3xl" />
  </button>
);

const Sidebar = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="z-50 w-full max-w-md mx-auto overflow-hidden border bg-frost-light-shade dark:bg-frost-dark-shade rounded-2xl border-neutral-900/10 dark:border-neutral-100/10"
          onClick={(e) => e.stopPropagation()} // Prevents click inside from closing
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center p-4 text-lg gap-y-3"
          >
            {/* Use NavLink with conditional className for active styling */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "w-full border bg-frost-lighter-shade dark:bg-frost-darker-shade border-neutral-900/10 dark:border-neutral-100/10 rounded-2xl py-1 text-center"
                  : ""
              }
            >
              About
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive
                  ? "w-full border bg-frost-lighter-shade dark:bg-frost-darker-shade border-neutral-900/10 dark:border-neutral-100/10 rounded-2xl py-1 text-center"
                  : ""
              }
            >
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "w-full border bg-frost-lighter-shade dark:bg-frost-darker-shade border-neutral-900/10 dark:border-neutral-100/10 rounded-2xl py-1 text-center"
                  : ""
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "w-full border bg-frost-lighter-shade dark:bg-frost-darker-shade border-neutral-900/10 dark:border-neutral-100/10 rounded-2xl py-1 text-center"
                  : ""
              }
            >
              Contact
            </NavLink>
            <a
              href="https://1drv.ms/w/s!Asj88EIyKcfMxxNnmqOtWJuX_1HD?e=HbNJUa"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <DarkMode />
          </motion.div>
          <button
            className="absolute flex flex-row items-center justify-center px-3 py-2 border rounded-full gap-x-3 bg-neutral-100 dark:bg-neutral-900 border-neutral-900/10 dark:border-neutral-100/10 top-4 right-4"
            onClick={onClose}
          >
            <IoChevronBackOutline
              width="6"
              height="6"
              className="inline-block"
            />{" "}
            Back
          </button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const MobileNavMenu = ({ className }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={className + " flex"}>
      <HamburgerMenu onClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <main className={"flex-1 p-4 " + isSidebarOpen ? "hidden" : ""}>
        {/* Main content of your app */}
      </main>
    </div>
  );
};

export default MobileNavMenu;
