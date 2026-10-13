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

_Derniere mise a jour : 2026-10-13 14:54:58 UTC_

### IA & LLM

- [QingYunA/answer-me-with-html](https://github.com/QingYunA/answer-me-with-html) — 3274 ★
- [LosaLosSantos/aurelio-finance](https://github.com/LosaLosSantos/aurelio-finance) — 3088 ★
- [nanaism/yomiyasu](https://github.com/nanaism/yomiyasu) — 1939 ★
- [Rapport complet](trending/ai-llm.md)

### DevOps & Cloud

- [TrainWithShubham/tws-labs](https://github.com/TrainWithShubham/tws-labs) — 20 ★
- [NicholasFlemmer/styx-app](https://github.com/NicholasFlemmer/styx-app) — 17 ★
- [ivankupach/fullstack-interview-questions](https://github.com/ivankupach/fullstack-interview-questions) — 14 ★
- [Rapport complet](trending/devops-cloud.md)

### Backend (.NET / Go)

- [mhtsec/ARTEX](https://github.com/mhtsec/ARTEX) — 3842 ★
- [jiwoochris/artex-ko](https://github.com/jiwoochris/artex-ko) — 1428 ★
- [mizorewww/x_gift_bot](https://github.com/mizorewww/x_gift_bot) — 1236 ★
- [Rapport complet](trending/backend-dotnet-go.md)

### Frontend (Next.js / React)

- [bas3line/ascii](https://github.com/bas3line/ascii) — 824 ★
- [whirlchat/whirl](https://github.com/whirlchat/whirl) — 506 ★
- [OrgoAI/bops](https://github.com/OrgoAI/bops) — 300 ★
- [Rapport complet](trending/frontend-nextjs-react.md)

<!-- TRENDING:END -->
