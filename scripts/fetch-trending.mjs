import { writeFile, mkdir } from "node:fs/promises";
import { THEMES, WINDOW_DAYS, RESULTS_PER_THEME } from "./themes.mjs";

const GITHUB_API = "https://api.github.com/search/repositories";
const TOKEN = process.env.GITHUB_TOKEN;

function isoDaysAgo(days) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - days);
  return d.toISOString().slice(0, 10);
}

async function fetchTheme(theme) {
  const since = isoDaysAgo(WINDOW_DAYS);
  const q = `${theme.query} created:>${since}`;
  const url = `${GITHUB_API}?q=${encodeURIComponent(q)}&sort=stars&order=desc&per_page=${RESULTS_PER_THEME}`;

  const headers = { Accept: "application/vnd.github+json" };
  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`GitHub API error for "${theme.label}": ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return data.items ?? [];
}

function renderMarkdown(theme, repos, generatedAt) {
  const lines = [
    `# ${theme.label}`,
    "",
    `Genere automatiquement le ${generatedAt} — fenetre glissante de ${WINDOW_DAYS} jours.`,
    "",
    "| # | Repo | Etoiles | Langage | Description |",
    "|---|------|---------|---------|-------------|",
  ];

  repos.forEach((repo, i) => {
    const desc = (repo.description ?? "").replace(/\|/g, "\\|").slice(0, 120);
    lines.push(
      `| ${i + 1} | [${repo.full_name}](${repo.html_url}) | ${repo.stargazers_count} | ${repo.language ?? "-"} | ${desc} |`
    );
  });

  if (repos.length === 0) {
    lines.push("| - | Aucun resultat sur cette fenetre | - | - | - |");
  }

  lines.push("");
  return lines.join("\n");
}

function renderReadmeSection(results, generatedAt) {
  const lines = [`_Derniere mise a jour : ${generatedAt}_`, ""];
  for (const { theme, repos } of results) {
    lines.push(`### ${theme.label}`);
    lines.push("");
    const top = repos.slice(0, 3);
    if (top.length === 0) {
      lines.push("- Aucun resultat sur cette fenetre.");
    } else {
      for (const repo of top) {
        lines.push(`- [${repo.full_name}](${repo.html_url}) — ${repo.stargazers_count} ★`);
      }
    }
    lines.push(`- [Rapport complet](trending/${theme.slug}.md)`);
    lines.push("");
  }
  return lines.join("\n").trim();
}

async function updateReadme(section) {
  const path = new URL("../README.md", import.meta.url);
  const { readFile } = await import("node:fs/promises");
  let readme = await readFile(path, "utf8");

  const start = "<!-- TRENDING:START -->";
  const end = "<!-- TRENDING:END -->";
  const startIdx = readme.indexOf(start);
  const endIdx = readme.indexOf(end);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error("README.md is missing TRENDING:START / TRENDING:END markers");
  }

  const before = readme.slice(0, startIdx + start.length);
  const after = readme.slice(endIdx);
  readme = `${before}\n\n${section}\n\n${after}`;

  await writeFile(path, readme, "utf8");
}

async function main() {
  const generatedAt = new Date().toISOString().slice(0, 19).replace("T", " ") + " UTC";
  const outDir = new URL("../trending/", import.meta.url);
  await mkdir(outDir, { recursive: true });

  const results = [];
  for (const theme of THEMES) {
    console.log(`Fetching theme: ${theme.label}`);
    const repos = await fetchTheme(theme);
    results.push({ theme, repos });

    const markdown = renderMarkdown(theme, repos, generatedAt);
    await writeFile(new URL(`${theme.slug}.md`, outDir), markdown, "utf8");
  }

  await updateReadme(renderReadmeSection(results, generatedAt));
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
