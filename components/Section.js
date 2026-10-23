// The shared layout for every homepage section: a label and title on the left,
// the section's content on the right. Pass dark to get the inverted look.
export default function Section({ id, label, title, dark = false, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={
        dark
          ? "on-dark relative overflow-hidden bg-ink text-paper"
          : "border-t border-line"
      }
    >
      {dark && <div className="grid-accent" aria-hidden="true" />}

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:py-28 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p
              className={`font-mono text-xs uppercase tracking-[0.2em] ${
                dark ? "text-accent-inv" : "text-accent"
              }`}
            >
              {label}
            </p>
            <h2
              id={`${id}-title`}
              className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl"
            >
              {title}
            </h2>
          </div>
        </div>

        <div className="reveal lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}
