import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="on-dark border-t border-line-inv bg-ink text-muted-inv">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">{profile.headline}</p>
      </div>
    </footer>
  );
}
