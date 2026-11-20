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

_Derniere mise a jour : 2026-11-20 15:59:08 UTC_

### IA & LLM

- [agentes-chat/agentes-chat](https://github.com/agentes-chat/agentes-chat) — 1814 ★
- [sybil-solutions/inference-optimisation-skill](https://github.com/sybil-solutions/inference-optimisation-skill) — 1305 ★
- [bookwjitchieni1986/blender-ai-mcp-addon](https://github.com/bookwjitchieni1986/blender-ai-mcp-addon) — 1081 ★
- [Rapport complet](trending/ai-llm.md)

### DevOps & Cloud

- [serveroshq/panel](https://github.com/serveroshq/panel) — 1177 ★
- [ValidatorStack/solana-vigil](https://github.com/ValidatorStack/solana-vigil) — 227 ★
- [brunnojob/cifuse](https://github.com/brunnojob/cifuse) — 204 ★
- [Rapport complet](trending/devops-cloud.md)

### Backend (.NET / Go)

- [HolyArrs/HolyArrs](https://github.com/HolyArrs/HolyArrs) — 2406 ★
- [failsafe-security/artex](https://github.com/failsafe-security/artex) — 894 ★
- [TooonyChen/finallyshell](https://github.com/TooonyChen/finallyshell) — 623 ★
- [Rapport complet](trending/backend-dotnet-go.md)

### Frontend (Next.js / React)

- [opencoredev/islandcn](https://github.com/opencoredev/islandcn) — 821 ★
- [YellowLaborerMarket/Gemini-Config-Checker-](https://github.com/YellowLaborerMarket/Gemini-Config-Checker-) — 474 ★
- [weightcashiercupola/Gemini-Config-Checker-](https://github.com/weightcashiercupola/Gemini-Config-Checker-) — 473 ★
- [Rapport complet](trending/frontend-nextjs-react.md)

<!-- TRENDING:END -->
