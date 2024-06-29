import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function NavLinks({ className }) {
  const location = useLocation();
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className={"relative " + className}>
      <div
        className="relative flex flex-row items-center p-2 text-lg border gap-x-3 rounded-2xl border-neutral-900/10 dark:border-neutral-100/10"
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
      >
        {["/", "/experience", "/projects", "/contact"].map((path) => (
          <Tab
            key={path}
            to={path}
            setPosition={setPosition}
            location={location}
          >
            {path === "/"
              ? "About"
              : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
          </Tab>
        ))}
        <Tab
          isExternal
          href="https://1drv.ms/w/s!Asj88EIyKcfMxxNnmqOtWJuX_1HD?e=HbNJUa"
          setPosition={setPosition}
        >
          Resume
        </Tab>
        <Cursor position={position} />
      </div>
    </div>
  );
}

const Tab = ({ children, to, href, setPosition, location, isExternal }) => {
  const ref = useRef(null);

  const handleMouseEnter = () => {
    if (!ref?.current) return;

    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      left: ref.current.offsetLeft,
      width,
      opacity: 1,
    });
  };

  const isActive = to && location?.pathname === to;

  const commonProps = {
    ref,
    onMouseEnter: handleMouseEnter,
    className: `relative p-2 z-10 ${isActive ? "text-primary font-bold" : ""}`,
  };

  return isExternal ? (
    <a href={href} target="_blank" rel="noreferrer" {...commonProps}>
      {children}
    </a>
  ) : (
    <Link to={to} {...commonProps}>
      {children}
    </Link>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.div
      animate={{
        ...position,
      }}
      className="absolute z-0 border rounded-2xl bg-frost-lighter-shade dark:bg-frost-darker-shade border-neutral-900/10 dark:border-neutral-100/10 h-7 md:h-12"
    />
  );
};

export default NavLinks;
