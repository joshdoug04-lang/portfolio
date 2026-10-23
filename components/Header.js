import Link from "next/link";
import { profile } from "@/data/profile";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Toolkit", href: "/#toolkit" },
  { label: "Projects", href: "/#projects" },
  { label: "Resume", href: "/#resume" },
];

export default function Header() {
  return (
    <header className="on-dark sticky top-0 z-40 border-b border-line-inv bg-ink/90 text-paper backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="truncate font-mono text-sm tracking-tight text-paper"
        >
          {profile.name}
        </Link>

        <nav aria-label="Main" className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-inv transition-colors hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            className="rounded-full border border-line-inv px-4 py-1.5 text-sm font-medium text-paper transition-colors hover:border-paper"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
