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

_Derniere mise a jour : 2026-11-03 14:56:12 UTC_

### IA & LLM

- [ccch1mneyyy/dsh-Go](https://github.com/ccch1mneyyy/dsh-Go) — 7008 ★
- [wangzan101/Mika](https://github.com/wangzan101/Mika) — 5928 ★
- [modelflare-ai/AnyModelBot](https://github.com/modelflare-ai/AnyModelBot) — 2277 ★
- [Rapport complet](trending/ai-llm.md)

### DevOps & Cloud

- [SalmeronDevZone/azure-lab](https://github.com/SalmeronDevZone/azure-lab) — 99 ★
- [datasifaw/shopflow-dataops](https://github.com/datasifaw/shopflow-dataops) — 81 ★
- [codician-team/diffinery](https://github.com/codician-team/diffinery) — 78 ★
- [Rapport complet](trending/devops-cloud.md)

### Backend (.NET / Go)

- [paipiange/nvzhuang](https://github.com/paipiange/nvzhuang) — 2110 ★
- [DrWhax/unfairplay](https://github.com/DrWhax/unfairplay) — 910 ★
- [egoist/mygo-cloudmusic](https://github.com/egoist/mygo-cloudmusic) — 624 ★
- [Rapport complet](trending/backend-dotnet-go.md)

### Frontend (Next.js / React)

- [D3voz/openjutsu](https://github.com/D3voz/openjutsu) — 1363 ★
- [winnin/farol](https://github.com/winnin/farol) — 172 ★
- [GodAI-Master/ai-reference-atlas-zh](https://github.com/GodAI-Master/ai-reference-atlas-zh) — 64 ★
- [Rapport complet](trending/frontend-nextjs-react.md)

<!-- TRENDING:END -->
