import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function NavLinks() {
  const location = useLocation();
  const navRef = useRef(null);
  const [activeLinkStyle, setActiveLinkStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const updateActiveLinkStyle = () => {
      const activeLink = navRef.current.querySelector(
        `a[href="${location.pathname}"]`
      );
      if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink;
        setActiveLinkStyle({ left: offsetLeft, width: offsetWidth });
      }
    };

    updateActiveLinkStyle();
    window.addEventListener("resize", updateActiveLinkStyle);

    return () => {
      window.removeEventListener("resize", updateActiveLinkStyle);
    };
  }, [location.pathname]);

  return (
    <div className="relative">
      <motion.div
        className="absolute top-0 left-0 h-full border bg-frost-lighter-shade dark:bg-frost-darker-shade border-neutral-900/10 dark:border-neutral-100/10 rounded-2xl"
        initial={false}
        animate={{ left: activeLinkStyle.left, width: activeLinkStyle.width }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <div
        ref={navRef}
        className="relative flex flex-row items-center text-lg gap-x-3"
      >
        {[
          "/",
          "/education",
          "/experience",
          "/projects",
          "/certifications",
          "/contact",
        ].map((path) => (
          <Link
            key={path}
            to={path}
            className={`relative p-2 z-10 ${
              location.pathname === path ? "" : ""
            }`}
          >
            {path === "/"
              ? "About"
              : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavLinks;
