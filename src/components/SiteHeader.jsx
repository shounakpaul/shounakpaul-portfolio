import { useState } from "react";
import { FiDownload, FiMenu } from "react-icons/fi";
import { navigation, site } from "../content/portfolio";
import { useActiveSection } from "../lib/useActiveSection";
import BrandMark from "./BrandMark";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

const SECTION_IDS = navigation.map((item) => item.id);

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="container-site flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="inline-flex min-w-0 items-center gap-2.5">
          <BrandMark />
          <span className="hidden font-display text-xl leading-none sm:inline">
            {site.name}
          </span>
          <span className="sr-only"> — home</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={
                activeSection === item.id ? "location" : undefined
              }
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.links.resume}
            download={site.links.resumeDownloadName}
            className="btn btn-secondary hidden md:inline-flex"
          >
            Résumé
            <FiDownload aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-haspopup="dialog"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            <FiMenu aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
      />
    </header>
  );
}
