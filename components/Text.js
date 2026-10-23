import { isPlaceholder } from "@/lib/placeholders";

// Shows a piece of content. Unfilled [ADD ...] placeholders get a dashed style.
export default function Text({ children }) {
  if (isPlaceholder(children)) {
    return <span className="placeholder">{children}</span>;
  }
  return children;
}
