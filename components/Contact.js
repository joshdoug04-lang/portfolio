import { profile } from "@/data/profile";
import { isPlaceholder } from "@/lib/placeholders";
import Section from "./Section";
import Text from "./Text";

const withoutProtocol = (url) => url.replace(/^https?:\/\/(www\.)?/, "");

export default function Contact() {
  const links = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      display: profile.email,
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:+1${profile.phone.replace(/\D/g, "")}`,
      display: profile.phone,
    },
    {
      label: "LinkedIn",
      value: profile.linkedin,
      href: profile.linkedin,
      display: withoutProtocol(profile.linkedin),
      external: true,
    },
    {
      label: "GitHub",
      value: profile.github,
      href: profile.github,
      display: withoutProtocol(profile.github),
      external: true,
    },
  ];

  return (
    <Section id="contact" label="Contact" title="Let's talk." dark>
      <ul className="divide-y divide-line-inv border-y border-line-inv">
        {links.map((link) => (
          <li
            key={link.label}
            className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-inv">
              {link.label}
            </span>
            {isPlaceholder(link.value) ? (
              <span className="text-lg">
                <Text>{link.value}</Text>
              </span>
            ) : (
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="break-all text-lg underline decoration-line-inv underline-offset-4 transition-colors hover:text-accent-inv hover:decoration-accent-inv"
              >
                {link.display}
                {link.external && (
                  <span className="sr-only"> (opens in a new tab)</span>
                )}
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
