// Your projects. Each one gets a card on the homepage and its own case study
// page at /projects/<slug>.
//
// To add a project, copy the whole { ... } block below, paste it into the list,
// and edit it. Give it a new "slug": lowercase words joined by hyphens.
//
// "status" shows as a badge on the card, e.g. "In Progress" or "Live".
// "caseStudy" is the list of sections on the project's page, in order. Each
// "body" can be one paragraph ("...") or several (["...", "..."]).

export const projects = [
  {
    slug: "campaign-builder",
    title: "Campaign Builder",
    status: "Live",
    // Set to true to publish this project's case study page and link the card
    // to it. While false, the page shows "not found" and the card has no link.
    caseStudyLink: false,
    summary:
      "An AI tool that turns a 9-question marketing survey into a full custom campaign: strategy, content calendar, sample posts, ad concepts, and KPIs.",
    tags: ["Claude API", "Next.js", "Claude Code"],
    // Optional links. Leave as "" to hide.
    // liveUrl adds a "Try Live Demo" button to the card, opening in a new tab.
    liveUrl: "https://campaign-builder-inky.vercel.app",
    repoUrl: "",
    caseStudy: [
      { heading: "Problem", body: "[ADD PROBLEM]" },
      { heading: "Idea", body: "[ADD IDEA]" },
      { heading: "Build", body: "[ADD HOW YOU BUILT IT]" },
      { heading: "Architecture", body: "[ADD ARCHITECTURE]" },
      { heading: "Tools Used", body: "[ADD TOOLS USED]" },
      { heading: "Challenges", body: "[ADD CHALLENGES]" },
      { heading: "What I Learned", body: "[ADD WHAT YOU LEARNED]" },
      { heading: "Demo", body: "[ADD DEMO LINK, SCREENSHOTS OR VIDEO]" },
      { heading: "Future Improvements", body: "[ADD FUTURE IMPROVEMENTS]" },
    ],
  },
  {
    slug: "company-research-agent",
    title: "AI Company Research Agent",
    status: "In Progress",
    // Set to true to publish this project's case study page and link the card
    // to it. While false, the page shows "not found" and the card has no link.
    caseStudyLink: false,
    summary:
      "An AI tool that researches any company on the web and turns real sources into a structured, cited intelligence report. Currently in development.",
    tags: ["Claude Code", "Tavily API", "Next.js"],
    // Optional links. Leave as "" to hide.
    liveUrl: "https://ai-company-intelligence.vercel.app",
    repoUrl: "",
    caseStudy: [
      { heading: "Problem", body: "[ADD PROBLEM]" },
      { heading: "Idea", body: "[ADD IDEA]" },
      { heading: "Build", body: "[ADD HOW YOU BUILT IT]" },
      { heading: "Architecture", body: "[ADD ARCHITECTURE]" },
      { heading: "Tools Used", body: "[ADD TOOLS USED]" },
      { heading: "Challenges", body: "[ADD CHALLENGES]" },
      { heading: "What I Learned", body: "[ADD WHAT YOU LEARNED]" },
      { heading: "Demo", body: "[ADD DEMO LINK, SCREENSHOTS OR VIDEO]" },
      { heading: "Future Improvements", body: "[ADD FUTURE IMPROVEMENTS]" },
    ],
  },
];
