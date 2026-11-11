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

_Derniere mise a jour : 2026-11-11 15:00:06 UTC_

### IA & LLM

- [wangzan101/Mika](https://github.com/wangzan101/Mika) — 8210 ★
- [N1nEmAn/sapper-v2](https://github.com/N1nEmAn/sapper-v2) — 1955 ★
- [Sandflow-ai/sand3d](https://github.com/Sandflow-ai/sand3d) — 1832 ★
- [Rapport complet](trending/ai-llm.md)

### DevOps & Cloud

- [ValidatorStack/solana-vigil](https://github.com/ValidatorStack/solana-vigil) — 241 ★
- [SalmeronDevZone/azure-lab](https://github.com/SalmeronDevZone/azure-lab) — 138 ★
- [brunnojob/cifuse](https://github.com/brunnojob/cifuse) — 74 ★
- [Rapport complet](trending/devops-cloud.md)

### Backend (.NET / Go)

- [paipiange/nvzhuang](https://github.com/paipiange/nvzhuang) — 2791 ★
- [Lee-xeo/Claude-Cage](https://github.com/Lee-xeo/Claude-Cage) — 2664 ★
- [DIYgod/pinky](https://github.com/DIYgod/pinky) — 1835 ★
- [Rapport complet](trending/backend-dotnet-go.md)

### Frontend (Next.js / React)

- [YusufCeng1z/ding](https://github.com/YusufCeng1z/ding) — 535 ★
- [AbhiKamane/ai-app-builder-open](https://github.com/AbhiKamane/ai-app-builder-open) — 481 ★
- [zeemscript/block-roll](https://github.com/zeemscript/block-roll) — 164 ★
- [Rapport complet](trending/frontend-nextjs-react.md)

<!-- TRENDING:END -->
