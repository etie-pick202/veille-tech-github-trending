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

_Derniere mise a jour : 2026-11-09 17:19:52 UTC_

### IA & LLM

- [wangzan101/Mika](https://github.com/wangzan101/Mika) — 7891 ★
- [modelflare-ai/AnyModelBot](https://github.com/modelflare-ai/AnyModelBot) — 2743 ★
- [N1nEmAn/sapper-v2](https://github.com/N1nEmAn/sapper-v2) — 1772 ★
- [Rapport complet](trending/ai-llm.md)

### DevOps & Cloud

- [SalmeronDevZone/azure-lab](https://github.com/SalmeronDevZone/azure-lab) — 137 ★
- [Darktotemport/Microsoft-rpocket-PowerPoint-2026](https://github.com/Darktotemport/Microsoft-rpocket-PowerPoint-2026) — 59 ★
- [brunnojob/cifuse](https://github.com/brunnojob/cifuse) — 50 ★
- [Rapport complet](trending/devops-cloud.md)

### Backend (.NET / Go)

- [paipiange/nvzhuang](https://github.com/paipiange/nvzhuang) — 2648 ★
- [DIYgod/pinky](https://github.com/DIYgod/pinky) — 1382 ★
- [egoist/mygo-music](https://github.com/egoist/mygo-music) — 1096 ★
- [Rapport complet](trending/backend-dotnet-go.md)

### Frontend (Next.js / React)

- [AbhiKamane/ai-app-builder-open](https://github.com/AbhiKamane/ai-app-builder-open) — 377 ★
- [YusufCeng1z/ding](https://github.com/YusufCeng1z/ding) — 202 ★
- [zeemscript/block-roll](https://github.com/zeemscript/block-roll) — 164 ★
- [Rapport complet](trending/frontend-nextjs-react.md)

<!-- TRENDING:END -->
