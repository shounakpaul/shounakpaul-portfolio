import { useEffect, useRef, useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

export default function CopyEmailButton({ email }) {
  const [status, setStatus] = useState("");
  const timerRef = useRef(null);

  useEffect(
    () => () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    },
    []
  );

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Copied to clipboard.");
    } catch {
      setStatus("Copy failed. Select the email address instead.");
    }

    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setStatus(""), 3000);
  }

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <button type="button" onClick={copyEmail} className="btn btn-secondary">
        {status.startsWith("Copied") ? (
          <FiCheck aria-hidden="true" className="h-3.5 w-3.5 text-accent" />
        ) : (
          <FiCopy aria-hidden="true" className="h-3.5 w-3.5" />
        )}
        Copy email
      </button>
      <span
        role="status"
        aria-live="polite"
        className="font-mono text-[10px] leading-relaxed tracking-[0.04em] text-muted"
      >
        {status}
      </span>
    </div>
  );
}
