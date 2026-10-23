import { profile } from "@/data/profile";
import { isPlaceholder } from "@/lib/placeholders";
import Section from "./Section";
import Text from "./Text";

export default function Resume() {
  const hasResume = !isPlaceholder(profile.resumeFile);

  return (
    <Section id="resume" label="Resume" title="The one-page version.">
      <div className="rounded-2xl border border-line bg-card p-7 sm:p-9">
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          <Text>{profile.resumeSummary}</Text>
        </p>

        {hasResume ? (
          <a
            href={profile.resumeFile}
            download
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            Download resume (PDF)
            <span aria-hidden="true">↓</span>
          </a>
        ) : (
          <div className="mt-8">
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-muted px-6 py-3 text-sm font-medium text-muted"
            >
              Download resume (PDF)
              <span aria-hidden="true">↓</span>
            </span>
            <p className="mt-3 text-sm text-muted">
              <span className="placeholder">[ADD RESUME PDF]</span>
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
