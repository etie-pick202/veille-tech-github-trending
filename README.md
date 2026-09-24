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

_Derniere mise a jour : 2026-09-24 12:39:13 UTC_

### IA & LLM

- [jev-chat/jev-chat-jarvis](https://github.com/jev-chat/jev-chat-jarvis) — 5670 ★
- [yibie/awesome-jev](https://github.com/yibie/awesome-jev) — 1577 ★
- [youngyangyang04/llm-master](https://github.com/youngyangyang04/llm-master) — 943 ★
- [Rapport complet](trending/ai-llm.md)

### DevOps & Cloud

- [mikehasa/golive-skill](https://github.com/mikehasa/golive-skill) — 475 ★
- [nateships/rolle](https://github.com/nateships/rolle) — 25 ★
- [PG-Circuit/pg-circuit](https://github.com/PG-Circuit/pg-circuit) — 15 ★
- [Rapport complet](trending/devops-cloud.md)

### Backend (.NET / Go)

- [unreallabsai/unreal-agent](https://github.com/unreallabsai/unreal-agent) — 1835 ★
- [linguo2625469/workbuddy2api-panel](https://github.com/linguo2625469/workbuddy2api-panel) — 873 ★
- [kryvora-network/kryvora-node](https://github.com/kryvora-network/kryvora-node) — 636 ★
- [Rapport complet](trending/backend-dotnet-go.md)

### Frontend (Next.js / React)

- [ithtelab/workbuddy-manager](https://github.com/ithtelab/workbuddy-manager) — 463 ★
- [liyupi/ai-model-world](https://github.com/liyupi/ai-model-world) — 181 ★
- [Shellishack/infinite-pokemon](https://github.com/Shellishack/infinite-pokemon) — 139 ★
- [Rapport complet](trending/frontend-nextjs-react.md)

<!-- TRENDING:END -->
