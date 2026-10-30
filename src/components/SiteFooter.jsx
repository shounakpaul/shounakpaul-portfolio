import { FiArrowUp } from "react-icons/fi";
import { site } from "../content/portfolio";
import ExternalLink from "./ExternalLink";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer border-t border-footer-line bg-footer text-footer-ink">
      <div className="container-site flex flex-col gap-6 py-9 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <a href="#top" className="font-display text-2xl leading-none">
            {site.name}
          </a>
          <p className="eyebrow mt-2.5 text-footer-muted">
            {site.title} · {site.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-footer-muted">
          <a
            href={`mailto:${site.email}`}
            className="link-underline transition-colors hover:text-footer-ink"
          >
            Email
          </a>
          <ExternalLink
            href={site.links.github}
            className="link-underline transition-colors hover:text-footer-ink"
          >
            GitHub
          </ExternalLink>
          <ExternalLink
            href={site.links.linkedin}
            className="link-underline transition-colors hover:text-footer-ink"
          >
            LinkedIn
          </ExternalLink>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.08em] transition-colors hover:text-footer-ink"
          >
            Back to top
            <FiArrowUp aria-hidden="true" className="h-3 w-3" />
          </a>
        </div>
      </div>

      <div className="container-site flex flex-col gap-2 border-t border-footer-line py-4 text-[11px] text-footer-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {currentYear} Shounak Paul</p>
        <p>Built with React, Vite, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
