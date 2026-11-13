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

_Derniere mise a jour : 2026-11-13 15:14:38 UTC_

### IA & LLM

- [Sandflow-ai/sand3d](https://github.com/Sandflow-ai/sand3d) — 1954 ★
- [agentes-chat/agentes-chat](https://github.com/agentes-chat/agentes-chat) — 1293 ★
- [SAOS-3624/dsh-see-now](https://github.com/SAOS-3624/dsh-see-now) — 621 ★
- [Rapport complet](trending/ai-llm.md)

### DevOps & Cloud

- [serveroshq/panel](https://github.com/serveroshq/panel) — 717 ★
- [ValidatorStack/solana-vigil](https://github.com/ValidatorStack/solana-vigil) — 240 ★
- [brunnojob/cifuse](https://github.com/brunnojob/cifuse) — 98 ★
- [Rapport complet](trending/devops-cloud.md)

### Backend (.NET / Go)

- [Lee-xeo/Claude-Cage](https://github.com/Lee-xeo/Claude-Cage) — 5190 ★
- [DIYgod/pinky](https://github.com/DIYgod/pinky) — 2068 ★
- [egoist/mygo-music](https://github.com/egoist/mygo-music) — 1306 ★
- [Rapport complet](trending/backend-dotnet-go.md)

### Frontend (Next.js / React)

- [YusufCeng1z/ding](https://github.com/YusufCeng1z/ding) — 638 ★
- [AbhiKamane/ai-app-builder-open](https://github.com/AbhiKamane/ai-app-builder-open) — 384 ★
- [zeemscript/block-roll](https://github.com/zeemscript/block-roll) — 164 ★
- [Rapport complet](trending/frontend-nextjs-react.md)

<!-- TRENDING:END -->
