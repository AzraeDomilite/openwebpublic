# openwebpublic — la zone malléable d'OpenWeb

Ce dépôt est **la partie du site qu'une IA construit**, tour après tour, à partir des votes de la communauté.
Il est **public exprès** : transparence radicale — on peut voir tout ce que l'IA a écrit.

> Le cœur (vote, consensus, orchestrateur, back-office) vit dans un **autre dépôt privé** (`openweb`).
> Ce dépôt-ci ne contient **que** la surface malléable. Voir la conception dans `openweb/docs/14`.

## ⚠️ On n'édite pas `main` à la main

- Les changements arrivent **uniquement par pull request** ouverte par l'agent IA (ou un mainteneur).
- `main` est **protégé** : merge seulement après le *review gate* (humain ou vote).
- Un **déployeur de confiance séparé** merge et déploie — jamais l'agent lui-même
  (`build identity ≠ deploy identity`).

## Zone malléable (chemins autorisés)

L'agent ne peut modifier que :
- `content/**` — le contenu structuré du site (données)
- `assets/**` — les médias (à venir)

Tout le reste est refusé par le **path guard** en CI (`.github/workflows/guard.yml`).

## Rollback

Réversibilité = `git revert` sur ce dépôt + redeploy. Chaque build est un commit isolé,
tracé à l'ID de la proposition votée qui l'a déclenché.
