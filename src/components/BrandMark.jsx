import { cx } from "../lib/cx";

export default function BrandMark({ tone = "default", className = "" }) {
  return (
    <span
      className={cx(
        "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] border font-mono text-[11px] font-medium tracking-tight",
        tone === "footer"
          ? "border-footer-accent bg-footer-accent text-footer"
          : "border-accent bg-accent text-on-accent",
        className
      )}
    >
      SP
    </span>
  );
}
