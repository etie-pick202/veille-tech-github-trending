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

_Derniere mise a jour : 2026-11-05 15:17:17 UTC_

### IA & LLM

- [ccch1mneyyy/dsh-Go](https://github.com/ccch1mneyyy/dsh-Go) — 11092 ★
- [wangzan101/Mika](https://github.com/wangzan101/Mika) — 7004 ★
- [modelflare-ai/AnyModelBot](https://github.com/modelflare-ai/AnyModelBot) — 2707 ★
- [Rapport complet](trending/ai-llm.md)

### DevOps & Cloud

- [SalmeronDevZone/azure-lab](https://github.com/SalmeronDevZone/azure-lab) — 126 ★
- [codician-team/diffinery](https://github.com/codician-team/diffinery) — 82 ★
- [fatihfurkan46/SignalWeave](https://github.com/fatihfurkan46/SignalWeave) — 57 ★
- [Rapport complet](trending/devops-cloud.md)

### Backend (.NET / Go)

- [DrWhax/unfairplay](https://github.com/DrWhax/unfairplay) — 935 ★
- [Balanov/uncut](https://github.com/Balanov/uncut) — 604 ★
- [Balanov/shim](https://github.com/Balanov/shim) — 459 ★
- [Rapport complet](trending/backend-dotnet-go.md)

### Frontend (Next.js / React)

- [D3voz/openjutsu](https://github.com/D3voz/openjutsu) — 1706 ★
- [zeemscript/block-roll](https://github.com/zeemscript/block-roll) — 160 ★
- [yorkeccak/globalhackmap](https://github.com/yorkeccak/globalhackmap) — 80 ★
- [Rapport complet](trending/frontend-nextjs-react.md)

<!-- TRENDING:END -->
