import { profile } from "@/data/profile";
import Text from "./Text";

const BUTTONS = [
  { label: "View Projects", href: "#projects", primary: true },
  { label: "Resume", href: "#resume" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="on-dark relative overflow-hidden bg-ink text-paper"
    >
      <div className="grid-accent" aria-hidden="true" />
      <div className="glow-accent" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-28">
        <p
          className="rise font-mono text-xs uppercase tracking-[0.2em] text-muted-inv"
          style={{ "--step": 0 }}
        >
          Portfolio <span aria-hidden="true">/</span>{" "}
          <Text>{profile.location}</Text>
        </p>

        <h1
          id="hero-title"
          className="rise mt-8 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl"
          style={{ "--step": 1 }}
        >
          {profile.name}
        </h1>

        <p
          className="rise mt-6 max-w-2xl font-display text-2xl italic leading-snug text-accent-inv sm:text-3xl"
          style={{ "--step": 2 }}
        >
          {profile.headline}
        </p>

        <p
          className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted-inv"
          style={{ "--step": 3 }}
        >
          <Text>{profile.intro}</Text>
        </p>

        <ul
          className="rise mt-10 flex flex-wrap gap-3"
          style={{ "--step": 4 }}
        >
          {BUTTONS.map((button) => (
            <li key={button.href}>
              <a
                href={button.href}
                className={
                  button.primary
                    ? "inline-flex items-center rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent-inv"
                    : "inline-flex items-center rounded-full border border-line-inv px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper"
                }
              >
                {button.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
