import { useEffect, useRef } from "react";
import { FiDownload, FiX } from "react-icons/fi";
import { navigation, site } from "../content/portfolio";
import { cx } from "../lib/cx";
import BrandMark from "./BrandMark";
import ThemeToggle from "./ThemeToggle";

export default function MobileMenu({ open, onClose, activeSection }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      window.requestAnimationFrame(() => {
        if (dialog.open) closeButtonRef.current?.focus();
      });
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    function handleClose() {
      onClose();
    }

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      id="mobile-menu"
      aria-labelledby="mobile-menu-title"
      className="menu-dialog"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <div className="container-site flex min-h-[100dvh] flex-col py-5">
        <div className="flex items-center justify-between border-b border-line pb-4">
          <a href="#top" onClick={onClose} className="inline-flex items-center gap-2.5">
            <BrandMark />
            <span className="font-display text-xl leading-none">{site.name}</span>
            <span className="sr-only"> — home</span>
          </a>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <FiX aria-hidden="true" className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-between py-8">
          <nav aria-label="Mobile navigation">
            <h2 id="mobile-menu-title" className="eyebrow">
              Menu
            </h2>
            <ul className="mt-4">
              {navigation.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    aria-current={
                      activeSection === item.id ? "location" : undefined
                    }
                    className={cx(
                      "flex items-baseline gap-4 border-b border-line py-4 font-display text-[clamp(2rem,9vw,3rem)] leading-none transition-colors",
                      activeSection === item.id
                        ? "text-accent"
                        : "text-ink hover:text-accent"
                    )}
                  >
                    <span className="font-mono text-[10px] tracking-[0.12em] text-muted">
                      0{index + 1}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10">
            <a
              href={site.links.resume}
              download={site.links.resumeDownloadName}
              className="btn btn-primary w-full"
              onClick={onClose}
            >
              Download résumé
              <FiDownload aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
            <div className="mt-5 flex items-center justify-between border-t border-line pt-5">
              <p className="eyebrow">Theme</p>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
