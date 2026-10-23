export default function StatusBadge({ status, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] ${
        dark ? "border-line-inv text-accent-inv" : "border-line text-accent"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-accent-inv" : "bg-accent"}`}
      />
      {status}
    </span>
  );
}
