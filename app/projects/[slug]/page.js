import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatusBadge from "@/components/StatusBadge";
import Text from "@/components/Text";
import { projects } from "@/data/projects";
import { isPlaceholder, toId } from "@/lib/placeholders";

// Only projects with caseStudyLink: true in data/projects.js have a live page;
// the rest show "not found" until it's switched on.
const findProject = (slug) =>
  projects.find((project) => project.slug === slug && project.caseStudyLink);

// Builds one page per published project in data/projects.js.
export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudyLink)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = findProject(slug);
  return project ? { title: `${project.title} case study` } : {};
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  const links = [
    { label: "View live", href: project.liveUrl },
    { label: "View code", href: project.repoUrl },
  ].filter((link) => !isPlaceholder(link.href));

  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <section
          aria-labelledby="project-title"
          className="on-dark relative overflow-hidden bg-ink text-paper"
        >
          <div className="grid-accent" aria-hidden="true" />
          <div className="glow-accent" aria-hidden="true" />

          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-14 sm:pb-24 sm:pt-20">
            <Link
              href="/#projects"
              className="rise inline-flex items-center gap-2 text-sm text-muted-inv transition-colors hover:text-paper"
              style={{ "--step": 0 }}
            >
              <span aria-hidden="true">←</span> All projects
            </Link>

            <p
              className="rise mt-10 flex flex-wrap items-center gap-4"
              style={{ "--step": 1 }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-inv">
                Case study
              </span>
              <StatusBadge status={project.status} dark />
            </p>

            <h1
              id="project-title"
              className="rise mt-6 max-w-4xl font-display text-5xl leading-[1.04] tracking-tight sm:text-7xl"
              style={{ "--step": 2 }}
            >
              {project.title}
            </h1>

            <p
              className="rise mt-6 max-w-2xl text-lg leading-relaxed text-muted-inv"
              style={{ "--step": 3 }}
            >
              <Text>{project.summary}</Text>
            </p>

            {links.length > 0 && (
              <ul
                className="rise mt-8 flex flex-wrap gap-3"
                style={{ "--step": 4 }}
              >
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-line-inv px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-paper"
                    >
                      {link.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-12">
          <nav
            aria-label="Case study sections"
            className="hidden lg:col-span-4 lg:block"
          >
            <div className="sticky top-28">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                On this page
              </p>
              <ol className="mt-5 space-y-3 border-l border-line">
                {project.caseStudy.map((section) => (
                  <li key={section.heading}>
                    <a
                      href={`#${toId(section.heading)}`}
                      className="-ml-px block border-l border-transparent pl-5 text-sm text-muted transition-colors hover:border-ink hover:text-ink"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="lg:col-span-8">
            {project.caseStudy.map((section) => (
              <section
                key={section.heading}
                id={toId(section.heading)}
                aria-labelledby={`${toId(section.heading)}-title`}
                className="reveal border-t border-line py-12 first:border-t-0 first:pt-0"
              >
                <h2
                  id={`${toId(section.heading)}-title`}
                  className="font-display text-3xl tracking-tight sm:text-4xl"
                >
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5 text-lg leading-relaxed text-muted">
                  {[section.body].flat().map((paragraph, index) => (
                    <p key={index}>
                      <Text>{paragraph}</Text>
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <div className="border-t border-line pt-10">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
              >
                Get in touch <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
