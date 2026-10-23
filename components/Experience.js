import { education, experience } from "@/data/experience";
import { isPlaceholder } from "@/lib/placeholders";
import Section from "./Section";
import Text from "./Text";

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I've worked and studied.">
      <ol className="border-l border-line">
        {experience.map((entry, index) => (
          <li key={index} className="relative pb-12 pl-8">
            <span
              aria-hidden="true"
              className={`absolute top-2 rounded-full bg-accent ring-4 ring-paper ${
                entry.featured
                  ? "-left-[7px] h-[13px] w-[13px]"
                  : "-left-[5px] h-[9px] w-[9px]"
              }`}
            />
            <div
              className={
                entry.featured
                  ? "rounded-2xl border border-line bg-card p-6 sm:p-8"
                  : undefined
              }
            >
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                <Text>{entry.period}</Text>
              </p>
              <h3
                className={
                  entry.featured
                    ? "mt-2 font-display text-3xl leading-tight tracking-tight sm:text-4xl"
                    : "mt-2 text-xl font-semibold tracking-tight"
                }
              >
                <Text>{entry.role}</Text>
              </h3>
              <p className="mt-1 text-muted">
                <span className={entry.featured ? "font-medium text-accent" : undefined}>
                  <Text>{entry.organization}</Text>
                </span>
                {!isPlaceholder(entry.location) && <>, {entry.location}</>}
              </p>
              {entry.highlights.length > 0 && (
                <ul className="mt-5 space-y-3">
                  {entry.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      className={`flex gap-3 leading-relaxed ${
                        entry.featured ? "text-ink" : "text-muted"
                      }`}
                    >
                      <span aria-hidden="true" className="text-accent">
                        –
                      </span>
                      <span>
                        <Text>{highlight}</Text>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="border-l border-line pl-8">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Education
        </h3>
        <ul className="mt-5 space-y-8">
          {education.map((entry, index) => (
            <li key={index}>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                <Text>{entry.date}</Text>
              </p>
              <h4 className="mt-2 text-xl font-semibold tracking-tight">
                <Text>{entry.degree}</Text>
              </h4>
              <p className="mt-1 text-muted">
                <Text>{entry.school}</Text>
                {!isPlaceholder(entry.location) && <>, {entry.location}</>}
              </p>
              {entry.details.length > 0 && (
                <ul className="mt-4 space-y-1 text-muted">
                  {entry.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>
                      <Text>{detail}</Text>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
