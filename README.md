# Site personnel — Abdelmadjid Menad

Next.js 16 · React 19 · TypeScript — site bilingue (FR/EN), sans base de données ni variable d'environnement.

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # vérifie que tout compile
```

Node.js ≥ 20.9 requis (Node 22 recommandé, voir `.nvmrc`).

## Modifier le contenu

Tout le texte (FR et EN), l'e-mail, le lien LinkedIn et les projets sont dans `lib/content.ts`.
Les CV téléchargeables sont dans `public/` :

- `CV_Abdelmadjid_Menad_FR.pdf`
- `CV_Abdelmadjid_Menad_EN.pdf`

Remplace-les par tes nouvelles versions en gardant les mêmes noms.

## Déployer sur Vercel

**Option 1 — via GitHub (recommandé)**

1. Crée un dépôt GitHub et pousse ce dossier :
   ```bash
   git init && git add . && git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<ton-user>/<ton-repo>.git
   git push -u origin main
   ```
2. Sur [vercel.com/new](https://vercel.com/new), importe le dépôt.
3. Vercel détecte Next.js automatiquement : garde les réglages par défaut et clique sur **Deploy**.

**Option 2 — via la CLI**

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

Chaque `git push` sur `main` redéploie ensuite automatiquement.
