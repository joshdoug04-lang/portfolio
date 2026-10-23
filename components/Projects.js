import Link from "next/link";
import { projects } from "@/data/projects";
import { isPlaceholder } from "@/lib/placeholders";
import Section from "./Section";
import StatusBadge from "./StatusBadge";
import Text from "./Text";

export default function Projects() {
  return (
    <Section id="projects" label="Featured Projects" title="Things I've built.">
      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.slug}>
            <article
              className={`group relative rounded-2xl border border-line bg-card p-7 sm:p-9 ${
                project.caseStudyLink ? "transition-colors hover:border-ink" : ""
              }`}
            >
              <StatusBadge status={project.status} />

              <h3 className="mt-5 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                {project.caseStudyLink ? (
                  // The link's ::after covers the card, so the whole card is clickable.
                  <Link
                    href={`/projects/${project.slug}`}
                    className="after:absolute after:inset-0 after:rounded-2xl"
                  >
                    {project.title}
                  </Link>
                ) : (
                  project.title
                )}
              </h3>

              <p className="mt-4 max-w-xl leading-relaxed text-muted">
                <Text>{project.summary}</Text>
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="rounded-full border border-line px-3 py-1 text-sm text-muted"
                  >
                    <Text>{tag}</Text>
                  </li>
                ))}
              </ul>

              {project.liveUrl && (
                <div className="mt-8">
                  {isPlaceholder(project.liveUrl) ? (
                    <p className="text-sm text-muted">
                      <Text>{project.liveUrl}</Text>
                    </p>
                  ) : (
                    // z-10 keeps the button clickable above the card-wide case study link.
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
                    >
                      Try Live Demo <span aria-hidden="true">↗</span>
                      <span className="sr-only">
                        {" "}
                        of {project.title} (opens in a new tab)
                      </span>
                    </a>
                  )}
                </div>
              )}

              {project.caseStudyLink && (
                <p className="mt-8 text-sm font-medium text-ink">
                  Read the case study{" "}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                  >
                    →
                  </span>
                </p>
              )}
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
