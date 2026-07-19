# openwebpublic — le site codé par l'IA

Ce dépôt **est le site public d'OpenWeb** : son code est écrit par une IA, tour après tour,
à partir des votes de la communauté. Il démarre sur une **page blanche** et grandit.
**Public exprès** : transparence radicale — on voit tout ce que l'IA a écrit.

> Le cœur (vote, consensus, orchestrateur, back-office) vit dans un **autre dépôt privé** (`openweb`),
> auquel l'IA n'a **aucun** accès. Voir la conception dans `openweb/docs/14`.

## Full CI/CD — l'IA valide en autonomie

1. L'agent IA code sur une **branche** (`build/<proposalId>`).
2. Il ouvre une **pull request**.
3. La CI tourne : **`guard`** (l'IA ne peut pas toucher ses garde-fous) + **`build`** (le site compile).
4. Si tout est vert → **auto-merge** (aucun humain dans la boucle de merge).
5. Le merge déclenche **`deploy`** → le site est en ligne.

Pourquoi c'est acceptable en autonomie totale : le rayon d'explosion est **borné** à ce dépôt —
public, isolé (aucun accès au vote/auth/cœur), et **réversible** (`git revert` + kill-switch).
Le filet n'est pas « un humain merge » mais **« CI verte + isolation + réversibilité »**.

## Ce que l'IA ne peut pas faire

- Toucher `.github/` ou `CODEOWNERS` → refusé par le **guard** (status check requis).
- Pusher sur `main` directement → interdit par la **protection de branche** (PR obligatoire).
- Atteindre le dépôt `openweb` → **token scoppé à ce dépôt uniquement**.

## Rollback

`git revert` sur ce dépôt + redeploy. Chaque build est un commit isolé, tracé à l'ID de la
proposition votée.
