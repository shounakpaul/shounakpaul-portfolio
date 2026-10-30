import { FiArrowUpRight } from "react-icons/fi";

export default function ExternalLink({
  href,
  children,
  className = "",
  showArrow = true,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      {showArrow ? (
        <FiArrowUpRight
          aria-hidden="true"
          className="ml-1 inline-block h-[0.9em] w-[0.9em]"
        />
      ) : null}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
