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

_Derniere mise a jour : 2026-11-08 14:11:07 UTC_

### IA & LLM

- [wangzan101/Mika](https://github.com/wangzan101/Mika) — 7698 ★
- [modelflare-ai/AnyModelBot](https://github.com/modelflare-ai/AnyModelBot) — 2741 ★
- [N1nEmAn/sapper-v2](https://github.com/N1nEmAn/sapper-v2) — 1556 ★
- [Rapport complet](trending/ai-llm.md)

### DevOps & Cloud

- [SalmeronDevZone/azure-lab](https://github.com/SalmeronDevZone/azure-lab) — 135 ★
- [fatihfurkan46/SignalWeave](https://github.com/fatihfurkan46/SignalWeave) — 57 ★
- [2hjaito/davish](https://github.com/2hjaito/davish) — 57 ★
- [Rapport complet](trending/devops-cloud.md)

### Backend (.NET / Go)

- [paipiange/nvzhuang](https://github.com/paipiange/nvzhuang) — 2337 ★
- [egoist/mygo-music](https://github.com/egoist/mygo-music) — 930 ★
- [Lee-xeo/Claude-Cage](https://github.com/Lee-xeo/Claude-Cage) — 601 ★
- [Rapport complet](trending/backend-dotnet-go.md)

### Frontend (Next.js / React)

- [D3voz/openjutsu](https://github.com/D3voz/openjutsu) — 1941 ★
- [AbhiKamane/ai-app-builder-open](https://github.com/AbhiKamane/ai-app-builder-open) — 244 ★
- [zeemscript/block-roll](https://github.com/zeemscript/block-roll) — 164 ★
- [Rapport complet](trending/frontend-nextjs-react.md)

<!-- TRENDING:END -->
