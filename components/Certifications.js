import { certificationGroups } from "@/data/certifications";
import { isPlaceholder } from "@/lib/placeholders";
import Section from "./Section";
import Text from "./Text";

export default function Certifications() {
  // Issuers with nothing listed yet stay hidden.
  const groups = certificationGroups.filter(
    (group) => group.certifications.length > 0
  );

  return (
    <Section id="certifications" label="Certifications" title="What I've been certified in.">
      <div className="space-y-14">
        {groups.map((group) => (
          <div key={group.issuer}>
            <h3 className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {group.issuer}
              <span aria-hidden="true" className="h-px flex-1 bg-line" />
            </h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {group.certifications.map((certification, index) => (
                <li key={index}>
                  <CertificationBadge
                    issuer={group.issuer}
                    certification={certification}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CertificationBadge({ issuer, certification }) {
  // A link left as "" is hidden; one still in [ADD ...] form shows as a placeholder.
  const links = [
    { label: "View certificate", href: certification.credentialUrl, primary: true },
    { label: "Course page", href: certification.courseUrl },
  ].filter((link) => link.href);

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card p-6">
      {/* Accent stripe along the top edge, like the band on a badge. */}
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-accent" />

      <div className="flex items-baseline justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
          {issuer}
        </p>
        <p className="shrink-0 font-mono text-xs uppercase tracking-[0.15em] text-muted">
          <Text>{certification.date}</Text>
        </p>
      </div>

      <h4 className="mt-5 font-display text-2xl leading-tight tracking-tight">
        <Text>{certification.name}</Text>
      </h4>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        <Text>{certification.description}</Text>
      </p>

      {links.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-dashed border-line pt-4 text-sm">
          {links.map((link) => (
            <li key={link.label}>
              {isPlaceholder(link.href) ? (
                <span className="text-muted">
                  <Text>{link.href}</Text>
                </span>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    link.primary
                      ? "font-medium text-accent underline underline-offset-4 hover:text-ink"
                      : "text-muted underline underline-offset-4 hover:text-ink"
                  }
                >
                  {link.label}
                  <span className="sr-only">
                    {" "}
                    for {certification.name} (opens in a new tab)
                  </span>
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
