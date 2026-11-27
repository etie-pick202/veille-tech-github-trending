# Veille technologique — GitHub Trending

Petit projet d'exemple pour apprendre a automatiser une veille technologique avec
**GitHub Actions** : un script Node interroge l'API GitHub Search pour reperer les
depots recemment crees et bien etoiles sur quelques themes suivis, puis un workflow
planifie regenere les rapports et les commit automatiquement dans le depot.

## Themes suivis

Definis dans [`scripts/themes.mjs`](scripts/themes.mjs) :

- **IA & LLM**
- **DevOps & Cloud**
- **Backend (.NET / Go)**
- **Frontend (Next.js / React)**

Ajouter, retirer ou modifier un theme se fait uniquement dans ce fichier.

## Comment ca marche

1. [`scripts/fetch-trending.mjs`](scripts/fetch-trending.mjs) interroge
   `GET /search/repositories` pour chaque theme (depots crees dans les 14 derniers
   jours, tries par etoiles) — un proxy simple du "trending" sans dependance externe.
2. Il ecrit un rapport par theme dans [`trending/`](trending/) et met a jour le
   resume ci-dessous dans ce README.
3. Le workflow [`.github/workflows/veille-trending.yml`](.github/workflows/veille-trending.yml)
   execute ce script tous les jours a 07:00 UTC (et sur demande via
   *Run workflow*), puis commit les changements avec `secrets.GITHUB_TOKEN`.

## Lancer en local

```bash
npm run fetch
```

Necessite Node.js >= 20 (utilise le `fetch` natif). Optionnel : exporter un
`GITHUB_TOKEN` pour eviter la limite de 10 requetes/minute de l'API non authentifiee.

## Derniers resultats

<!-- TRENDING:START -->

_Derniere mise a jour : 2026-11-27 17:21:18 UTC_

### IA & LLM

- [sybil-solutions/inference-optimisation-skill](https://github.com/sybil-solutions/inference-optimisation-skill) — 2870 ★
- [pierridotite/mobile-agent-testers](https://github.com/pierridotite/mobile-agent-testers) — 2587 ★
- [alesha-pro/llm.asm](https://github.com/alesha-pro/llm.asm) — 1967 ★
- [Rapport complet](trending/ai-llm.md)

### DevOps & Cloud

- [tdawalton1-alt/microsoft-powerpoint](https://github.com/tdawalton1-alt/microsoft-powerpoint) — 153 ★
- [royalpriest/devops-sim](https://github.com/royalpriest/devops-sim) — 62 ★
- [joesabbagh1/kubelearn](https://github.com/joesabbagh1/kubelearn) — 49 ★
- [Rapport complet](trending/devops-cloud.md)

### Backend (.NET / Go)

- [xyc999-ai/go-bot](https://github.com/xyc999-ai/go-bot) — 745 ★
- [TurtleReside/Gemini-Config-Checker-](https://github.com/TurtleReside/Gemini-Config-Checker-) — 451 ★
- [WerewolfEmuHub/Gemini-Config-Checker-](https://github.com/WerewolfEmuHub/Gemini-Config-Checker-) — 451 ★
- [Rapport complet](trending/backend-dotnet-go.md)

### Frontend (Next.js / React)

- [YellowLaborerMarket/Gemini-Config-Checker-](https://github.com/YellowLaborerMarket/Gemini-Config-Checker-) — 454 ★
- [weightcashiercupola/Gemini-Config-Checker-](https://github.com/weightcashiercupola/Gemini-Config-Checker-) — 453 ★
- [TurtleReside/Gemini-Config-Checker-](https://github.com/TurtleReside/Gemini-Config-Checker-) — 451 ★
- [Rapport complet](trending/frontend-nextjs-react.md)

<!-- TRENDING:END -->
