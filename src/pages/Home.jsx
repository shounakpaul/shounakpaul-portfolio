import {
  FiArrowRight,
  FiArrowUpRight,
  FiDownload,
  FiMail,
} from "react-icons/fi";
import {
  certifications,
  education,
  experience,
  leadership,
  projects,
  site,
  skillGroups,
} from "../content/portfolio";
import { usePageMeta } from "../lib/usePageMeta";
import { useScrollReveal } from "../lib/useScrollReveal";
import CopyEmailButton from "../components/CopyEmailButton";
import ExternalLink from "../components/ExternalLink";

export default function Home() {
  usePageMeta({ description: site.pageDescription });
  useScrollReveal();

  return (
    <>
      <section aria-labelledby="intro-title" className="border-b border-line">
        <div className="container-site">
          <div className="grid gap-10 py-12 md:grid-cols-12 md:gap-12 md:py-16 lg:py-24">
            <div className="md:col-span-7">
              <p className="eyebrow flex flex-wrap items-center gap-2.5" data-reveal>
                <span className="status-dot" aria-hidden="true" />
                {site.title}
                <span aria-hidden="true">·</span>
                {site.location}
              </p>

              <h1
                id="intro-title"
                className="display-xl mt-6 max-w-[16ch]"
                data-reveal
                style={{ "--reveal-delay": "60ms" }}
              >
                I build and maintain AI systems in production
                <span className="text-accent">.</span>
              </h1>

              <p
                className="lede mt-6 max-w-[54ch]"
                data-reveal
                style={{ "--reveal-delay": "120ms" }}
              >
                {site.intro}
              </p>

              <div
                className="mt-8 flex flex-wrap gap-2.5"
                data-reveal
                style={{ "--reveal-delay": "180ms" }}
              >
                <a href="#work" className="btn btn-primary">
                  View selected work
                  <FiArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
                <a
                  href={site.links.resume}
                  download={site.links.resumeDownloadName}
                  className="btn btn-secondary"
                >
                  Download résumé
                  <FiDownload aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              </div>

              <p
                className="mt-8 flex items-center gap-2.5 text-xs text-muted"
                data-reveal
                style={{ "--reveal-delay": "240ms" }}
              >
                <span className="status-dot" aria-hidden="true" />
                {site.currentNote}
              </p>
            </div>

            <aside
              className="md:col-span-4 md:col-start-9"
              data-reveal
              style={{ "--reveal-delay": "140ms" }}
            >
              <figure className="max-w-[280px] sm:max-w-[320px] md:max-w-none">
                <div className="overflow-hidden border border-line bg-surface">
                  <img
                    src={site.photo.src}
                    srcSet={site.photo.srcSet}
                    sizes="(min-width: 768px) 30vw, (min-width: 640px) 320px, 280px"
                    alt={site.photo.alt}
                    width="1080"
                    height="1350"
                    loading="eager"
                    decoding="async"
                    className="aspect-[4/5] h-full w-full object-cover object-center grayscale"
                  />
                </div>
                <figcaption className="mt-2.5 flex items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                  <span>{site.location}</span>
                  <span>Portrait</span>
                </figcaption>
              </figure>
            </aside>
          </div>
        </div>
      </section>

      <section
        id="work"
        aria-labelledby="work-title"
        className="section border-b border-line"
      >
        <div className="container-site">
          <div
            className="flex flex-wrap items-end justify-between gap-4"
            data-reveal
          >
            <div className="flex items-baseline gap-4">
              <span
                aria-hidden="true"
                className="font-mono text-[10px] font-medium text-accent"
              >
                01
              </span>
              <h2 id="work-title" className="display-lg">
                Selected work
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              Three projects in retrieval, generative models, and computer
              vision.
            </p>
          </div>

          <div className="mt-8 border-t border-line">
            {projects.map((project, index) => (
              <ExternalLink
                key={project.title}
                href={project.href}
                showArrow={false}
                className="group block border-b border-line py-5 transition-colors duration-200 hover:bg-surface md:px-3"
              >
                <div
                  className="grid gap-3 md:grid-cols-12 md:items-baseline md:gap-6"
                  data-reveal
                  style={{ "--reveal-delay": `${index * 60}ms` }}
                >
                  <span className="font-mono text-[10px] text-muted md:col-span-1">
                    0{index + 1}
                  </span>
                  <div className="md:col-span-5">
                    <h3 className="text-base font-medium transition-colors duration-200 group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>
                  <p className="font-mono text-[9px] leading-relaxed tracking-[0.04em] text-muted md:col-span-4">
                    {project.stack.join(" · ")}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.08em] text-muted transition-colors duration-200 group-hover:text-accent md:col-span-2 md:justify-end">
                    Repository
                    <FiArrowUpRight
                      aria-hidden="true"
                      className="h-3 w-3 transition-transform duration-200 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </ExternalLink>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        aria-labelledby="experience-title"
        className="section border-b border-line"
      >
        <div className="container-site">
          <div className="flex items-baseline gap-4" data-reveal>
            <span
              aria-hidden="true"
              className="font-mono text-[10px] font-medium text-accent"
            >
              02
            </span>
            <h2 id="experience-title" className="display-lg">
              Experience
            </h2>
          </div>

          <div className="mt-8 border-t border-line">
            {experience.map((role) => (
              <article
                key={role.id}
                className="grid gap-5 border-b border-line py-6 md:grid-cols-12 md:gap-8"
                data-reveal
              >
                <div className="md:col-span-3">
                  <p className="eyebrow">{role.period}</p>
                  <h3 className="mt-2 text-base font-medium">{role.company}</h3>
                  <p className="mt-1 text-sm text-muted">{role.role}</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.08em] text-muted">
                    {role.location}
                  </p>
                </div>
                <ul className="space-y-3 md:col-span-8 md:col-start-5">
                  {role.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="grid grid-cols-[auto_1fr] gap-3"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.65rem] h-px w-3 bg-accent"
                      />
                      <span className="text-sm leading-relaxed text-muted">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div
            className="mt-6 grid gap-3 md:grid-cols-12 md:gap-8"
            data-reveal
          >
            <p className="eyebrow md:col-span-3">Earlier</p>
            <div className="md:col-span-8 md:col-start-5">
              <p className="text-sm">
                <span className="font-medium">{leadership.organization}</span>
                <span className="text-muted">
                  {" "}
                  — {leadership.role}, {leadership.period}
                </span>
              </p>
              <p className="mt-1 text-sm text-muted">
                {leadership.description}
              </p>
            </div>
          </div>

          <div
            className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-12 md:gap-8"
            data-reveal
          >
            <p className="eyebrow md:col-span-3">Education</p>
            <div className="md:col-span-4">
              <h3 className="text-base font-medium">
                {education.institution}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {education.qualification}
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.08em] text-muted">
                {education.period} · {education.location}
              </p>
            </div>

            <div className="md:col-span-5">
              <p className="eyebrow">Certifications</p>
              <ul className="mt-3 space-y-2">
                {certifications.map((certification) => (
                  <li key={certification.title}>
                    <ExternalLink
                      href={certification.href}
                      showArrow={false}
                      className="group inline-flex items-start gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-accent"
                    >
                      <span>{certification.title}</span>
                      <span className="mt-0.5 shrink-0 font-mono text-[9px] text-muted">
                        {certification.year}
                      </span>
                      <FiArrowUpRight
                        aria-hidden="true"
                        className="mt-0.5 h-3 w-3 shrink-0 transition-transform duration-200 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="toolkit"
        aria-labelledby="toolkit-title"
        className="section border-b border-line"
      >
        <div className="container-site">
          <div className="flex items-baseline gap-4" data-reveal>
            <span
              aria-hidden="true"
              className="font-mono text-[10px] font-medium text-accent"
            >
              03
            </span>
            <h2 id="toolkit-title" className="display-lg">
              Toolkit
            </h2>
          </div>

          <dl className="mt-8 border-t border-line">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="grid gap-2 border-b border-line py-4 md:grid-cols-12 md:gap-6"
                data-reveal
              >
                <dt className="text-sm font-medium md:col-span-3">
                  {group.label}
                </dt>
                <dd className="text-sm leading-relaxed text-muted md:col-span-9">
                  {group.items.join(" / ")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-title"
        className="section"
      >
        <div className="container-site">
          <div className="grid gap-8 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4" data-reveal>
              <div className="flex items-baseline gap-4">
                <span
                  aria-hidden="true"
                  className="font-mono text-[10px] font-medium text-accent"
                >
                  04
                </span>
                <h2 id="contact-title" className="display-lg">
                  Contact
                </h2>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
                The best way to reach me is email.
              </p>
            </div>

            <div
              className="md:col-span-7 md:col-start-6"
              data-reveal
              style={{ "--reveal-delay": "80ms" }}
            >
              <a
                href={`mailto:${site.email}?subject=Portfolio%20enquiry`}
                className="inline-flex max-w-full items-center gap-3 font-display text-[clamp(1.4rem,3vw,2.4rem)] leading-tight text-ink transition-colors duration-200 hover:text-accent"
              >
                <FiMail
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-accent"
                />
                <span className="break-words">{site.email}</span>
              </a>
              <div className="mt-4">
                <CopyEmailButton email={site.email} />
              </div>

              <dl className="mt-8 border-t border-line">
                <div className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-3">
                  <dt className="eyebrow">Phone</dt>
                  <dd className="text-sm">
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="transition-colors hover:text-accent"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-3">
                  <dt className="eyebrow">Location</dt>
                  <dd className="text-sm text-muted">{site.location}</dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-3">
                  <dt className="eyebrow">Links</dt>
                  <dd className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    <ExternalLink
                      href={site.links.github}
                      showArrow={false}
                      className="transition-colors hover:text-accent"
                    >
                      GitHub
                    </ExternalLink>
                    <ExternalLink
                      href={site.links.linkedin}
                      showArrow={false}
                      className="transition-colors hover:text-accent"
                    >
                      LinkedIn
                    </ExternalLink>
                  </dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-3">
                  <dt className="eyebrow">Résumé</dt>
                  <dd className="text-sm">
                    <a
                      href={site.links.resume}
                      download={site.links.resumeDownloadName}
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                    >
                      Download PDF
                      <FiDownload
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
