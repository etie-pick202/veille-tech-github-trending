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

_Derniere mise a jour : 2026-10-07 14:21:30 UTC_

### IA & LLM

- [KKKKhazix/AIHOT](https://github.com/KKKKhazix/AIHOT) — 6342 ★
- [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) — 3167 ★
- [QingYunA/answer-me-with-html](https://github.com/QingYunA/answer-me-with-html) — 1968 ★
- [Rapport complet](trending/ai-llm.md)

### DevOps & Cloud

- [upgundecha/awesome-cloud-emulators](https://github.com/upgundecha/awesome-cloud-emulators) — 60 ★
- [ProbiusOfficial/NexTerm](https://github.com/ProbiusOfficial/NexTerm) — 49 ★
- [mtizima/docker-rollout-action](https://github.com/mtizima/docker-rollout-action) — 43 ★
- [Rapport complet](trending/devops-cloud.md)

### Backend (.NET / Go)

- [egoist/mygo](https://github.com/egoist/mygo) — 865 ★
- [mizorewww/x_gift_bot](https://github.com/mizorewww/x_gift_bot) — 825 ★
- [Calcium-Ion/moejs](https://github.com/Calcium-Ion/moejs) — 226 ★
- [Rapport complet](trending/backend-dotnet-go.md)

### Frontend (Next.js / React)

- [whirlchat/whirl](https://github.com/whirlchat/whirl) — 492 ★
- [kuratlielia/arc-library](https://github.com/kuratlielia/arc-library) — 353 ★
- [Local-Settle/local-settle-frontend](https://github.com/Local-Settle/local-settle-frontend) — 131 ★
- [Rapport complet](trending/frontend-nextjs-react.md)

<!-- TRENDING:END -->
