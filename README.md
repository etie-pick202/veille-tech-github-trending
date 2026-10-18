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

_Derniere mise a jour : 2026-10-18 11:59:42 UTC_

### IA & LLM

- [LosaLosSantos/aurelio-finance](https://github.com/LosaLosSantos/aurelio-finance) — 3953 ★
- [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) — 3055 ★
- [deeplethe/solid-glass](https://github.com/deeplethe/solid-glass) — 2001 ★
- [Rapport complet](trending/ai-llm.md)

### DevOps & Cloud

- [zzusec/forkiq](https://github.com/zzusec/forkiq) — 122 ★
- [ahmadjawad533/90-days-of-cloud-engineering](https://github.com/ahmadjawad533/90-days-of-cloud-engineering) — 34 ★
- [wisecort/LogDeck](https://github.com/wisecort/LogDeck) — 27 ★
- [Rapport complet](trending/devops-cloud.md)

### Backend (.NET / Go)

- [trhhubsd/ARTEX](https://github.com/trhhubsd/ARTEX) — 1235 ★
- [feder-cr/git-ai](https://github.com/feder-cr/git-ai) — 1161 ★
- [rohit267/net-merge](https://github.com/rohit267/net-merge) — 951 ★
- [Rapport complet](trending/backend-dotnet-go.md)

### Frontend (Next.js / React)

- [marclou/mailcheap](https://github.com/marclou/mailcheap) — 1217 ★
- [bas3line/ascii](https://github.com/bas3line/ascii) — 913 ★
- [thesysdev/open-intelligent-ui](https://github.com/thesysdev/open-intelligent-ui) — 530 ★
- [Rapport complet](trending/frontend-nextjs-react.md)

<!-- TRENDING:END -->
