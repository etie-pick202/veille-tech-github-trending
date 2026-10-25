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

_Derniere mise a jour : 2026-10-25 12:26:34 UTC_

### IA & LLM

- [deeplethe/solid-glass](https://github.com/deeplethe/solid-glass) — 2210 ★
- [outcrawlai/scout](https://github.com/outcrawlai/scout) — 938 ★
- [heqiangdiao-wq/AI-Cross-Border-Ecommerce-Agent-Toolkit](https://github.com/heqiangdiao-wq/AI-Cross-Border-Ecommerce-Agent-Toolkit) — 650 ★
- [Rapport complet](trending/ai-llm.md)

### DevOps & Cloud

- [zzusec/forkiq](https://github.com/zzusec/forkiq) — 150 ★
- [Rocky-true/vmware-to-kubernetes](https://github.com/Rocky-true/vmware-to-kubernetes) — 88 ★
- [dharmendradevops11/the-self-healing-pipeline](https://github.com/dharmendradevops11/the-self-healing-pipeline) — 74 ★
- [Rapport complet](trending/devops-cloud.md)

### Backend (.NET / Go)

- [rohit267/net-merge](https://github.com/rohit267/net-merge) — 2186 ★
- [feder-cr/git-ai](https://github.com/feder-cr/git-ai) — 996 ★
- [wangwanjie/gately](https://github.com/wangwanjie/gately) — 377 ★
- [Rapport complet](trending/backend-dotnet-go.md)

### Frontend (Next.js / React)

- [juliobsz/skills](https://github.com/juliobsz/skills) — 942 ★
- [dsmurrell/onkey](https://github.com/dsmurrell/onkey) — 301 ★
- [yaojingang/profound-clone](https://github.com/yaojingang/profound-clone) — 80 ★
- [Rapport complet](trending/frontend-nextjs-react.md)

<!-- TRENDING:END -->
