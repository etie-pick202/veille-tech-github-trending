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

_Derniere mise a jour : 2026-10-31 13:29:28 UTC_

### IA & LLM

- [ccch1mneyyy/dsh-Go](https://github.com/ccch1mneyyy/dsh-Go) — 3267 ★
- [wangzan101/Mika](https://github.com/wangzan101/Mika) — 2209 ★
- [jackwener/DSH-Android](https://github.com/jackwener/DSH-Android) — 599 ★
- [Rapport complet](trending/ai-llm.md)

### DevOps & Cloud

- [Rocky-true/vmware-to-kubernetes](https://github.com/Rocky-true/vmware-to-kubernetes) — 157 ★
- [sanjayadanushka712/TaskFlow](https://github.com/sanjayadanushka712/TaskFlow) — 127 ★
- [datasifaw/shopflow-dataops](https://github.com/datasifaw/shopflow-dataops) — 82 ★
- [Rapport complet](trending/devops-cloud.md)

### Backend (.NET / Go)

- [paipiange/nvzhuang](https://github.com/paipiange/nvzhuang) — 1550 ★
- [DrWhax/unfairplay](https://github.com/DrWhax/unfairplay) — 819 ★
- [armanlife/firefox-vpn-client](https://github.com/armanlife/firefox-vpn-client) — 528 ★
- [Rapport complet](trending/backend-dotnet-go.md)

### Frontend (Next.js / React)

- [D3voz/openjutsu](https://github.com/D3voz/openjutsu) — 696 ★
- [dsmurrell/onkey](https://github.com/dsmurrell/onkey) — 373 ★
- [winnin/farol](https://github.com/winnin/farol) — 170 ★
- [Rapport complet](trending/frontend-nextjs-react.md)

<!-- TRENDING:END -->
