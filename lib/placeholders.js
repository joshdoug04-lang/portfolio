// True for content that hasn't been filled in yet: "", or "[ADD SOMETHING]".
export function isPlaceholder(value) {
  return typeof value !== "string" || /^\s*(\[ADD\b|$)/.test(value);
}

// "my-section-title" from "My Section Title", for in-page links.
export function toId(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
