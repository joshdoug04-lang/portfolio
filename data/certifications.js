// Your certifications, grouped by issuer. Issuers show on the site in the order
// they appear here. An issuer with no certifications is hidden until you add one.
//
// To add a certification, copy a { ... } block into an issuer's
// "certifications" list and edit it.
// To add an issuer, copy a whole { issuer: ..., certifications: [ ... ] } block.
//
// "credentialUrl" is your own certificate. Put the file in public/certificates
// and point to it as "/certificates/file-name.pdf", or use a full "https://..."
// link. Leave it as "" to show no certificate link.
// "courseUrl" is optional: a link to the public course page, or "" for none.

export const certificationGroups = [
  {
    issuer: "Anthropic Academy",
    certifications: [
      {
        name: "AI Fluency: Framework & Foundations",
        date: "2026",
        description:
          "Directing AI clearly and quality-checking its output before it goes live.",
        credentialUrl: "/certificates/ai-fluency-framework-foundations.pdf",
        courseUrl: "https://anthropic.skilljar.com/ai-fluency-framework-foundations",
      },
      {
        name: "AI Fluency for Small Businesses",
        date: "2026",
        description:
          "Applying AI to campaigns, customer communication, and daily operations.",
        credentialUrl: "/certificates/ai-fluency-for-small-businesses.pdf",
        courseUrl: "https://anthropic.skilljar.com/ai-fluency-for-small-businesses",
      },
      {
        name: "Claude 101",
        date: "2026",
        description:
          "Using AI for research, writing, and analysis that stays on-brand.",
        credentialUrl: "/certificates/claude-101.pdf",
        courseUrl: "https://anthropic.skilljar.com/claude-101",
      },
      {
        name: "Introduction to Claude Cowork",
        date: "2026",
        description:
          "Delegating multi-step projects to AI agents to save hours each week.",
        credentialUrl: "/certificates/introduction-to-claude-cowork.pdf",
        courseUrl: "https://anthropic.skilljar.com/introduction-to-claude-cowork",
      },
      {
        name: "Claude Code 101",
        date: "2026",
        description:
          "Building scripts and tools that automate repetitive marketing tasks.",
        credentialUrl: "/certificates/claude-code-101.pdf",
        courseUrl: "https://anthropic.skilljar.com/claude-code-101",
      },
      {
        name: "Claude Code in Action",
        date: "2026",
        description:
          "Taking automations from idea to working tool on real projects.",
        credentialUrl: "/certificates/claude-code-in-action.pdf",
        courseUrl: "https://anthropic.skilljar.com/claude-code-in-action",
      },
      {
        name: "Claude Platform 101",
        date: "2026",
        description:
          "Connecting AI to the platforms marketing teams already use.",
        credentialUrl: "/certificates/claude-platform-101.pdf",
        courseUrl: "https://anthropic.skilljar.com/claude-platform-101",
      },
    ],
  },
  {
    issuer: "Hootsuite Academy",
    certifications: [
      {
        name: "Social Listening (Certified Professional)",
        date: "December 2024",
        description:
          "Tracking brand, competitor, and audience conversations to inform content strategy.",
        credentialUrl: "/certificates/hootsuite-social-listening.png",
        courseUrl: "",
      },
    ],
  },
  {
    issuer: "Semrush Academy",
    certifications: [
      {
        name: "SEO Principles",
        date: "December 2025",
        description:
          "Keyword research, on-page optimization, and content built to rank.",
        credentialUrl: "",
        courseUrl: "",
      },
    ],
  },
];
