// Themes tracked by the technology watch (veille technologique).
// Each theme becomes trending/<slug>.md, refreshed on every workflow run.
// Add / remove themes here to change what gets watched — no other code to touch.
// Note: l'API GitHub Search ne supporte pas "OR" entre qualifiers (topic:/language:)
// pour la recherche de repos -> un qualifier unique par theme, ca reste simple.
export const THEMES = [
  {
    slug: "ai-llm",
    label: "IA & LLM",
    query: "topic:llm",
  },
  {
    slug: "devops-cloud",
    label: "DevOps & Cloud",
    query: "topic:devops",
  },
  {
    slug: "backend-dotnet-go",
    label: "Backend (.NET / Go)",
    query: "language:Go",
  },
  {
    slug: "frontend-nextjs-react",
    label: "Frontend (Next.js / React)",
    query: "topic:nextjs",
  },
];

// Only keep repos created within this rolling window, so results reflect
// what's actively emerging rather than long-established projects.
export const WINDOW_DAYS = 14;

// Repos returned per theme.
export const RESULTS_PER_THEME = 10;
