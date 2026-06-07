# FRONTEND SETUP LOG — Gestion de tâche

## 📅 Date
2026-06-07

---

# 🚀 1. Création du projet

## Commande utilisée
```bash
npm create vite@latest frontend
Choix effectués
Framework : React
Variant : JavaScript
Installation dépendances : Yes
⚠️ 2. Problèmes rencontrés
❌ Node.js incompatible
Version initiale : Node v18.20.8
Problème : Vite 9 nécessite Node >= 20.19
Tentative de mise à jour Node
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

✔ Node 22 installé côté système
❌ Node 18 toujours actif dans terminal

⚠️ Solution retenue (temporaire)
Node gardé tel quel pour continuer
Frontend créé malgré avertissements
🎨 3. Installation Tailwind CSS
Commande
npm install -D tailwindcss postcss autoprefixer
Erreur rencontrée
could not determine executable to run (npx tailwindcss init -p)
Solution
création manuelle des fichiers config
📄 Fichier créé : tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
📄 Fichier créé : postcss.config.js

⚠️ correction Tailwind v4

export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
}
📄 Fichier modifié : src/index.css

Ajout en haut :

@tailwind base;
@tailwind components;
@tailwind utilities;
⚠️ Ajout CSS custom
Variables CSS globales ajoutées
Dark mode CSS ajouté
styles globaux conservés
⚠️ correction importante
@media retirés de :root (structure CSS corrigée mentalement)
séparation styles Tailwind / custom recommandée
📦 4. Installation dépendances frontend
React Router
npm install react-router-dom
Axios
npm install axios
React Hook Form
npm install react-hook-form
Zustand
npm install zustand
🧪 5. Test du projet
Commande
npm run dev
Résultat
serveur Vite OK
React affiché
Tailwind fonctionnel
🧪 Test UI

Affichage confirmé :

Tailwind OK 🚀
🧹 6. Fichiers créés / modifiés
Créés manuellement
tailwind.config.js
postcss.config.js
Modifiés
src/index.css
App.jsx (test Tailwind temporaire)
Générés automatiquement
vite project structure
package.json
node_modules
⚙️ 7. Problèmes résolus
incompatibilité Node/Vite
problème Tailwind CLI
erreur PostCSS Tailwind v4
configuration manuelle Tailwind
📌 ÉTAT FINAL

✔ Frontend opérationnel
✔ Tailwind fonctionnel
✔ React fonctionnel
✔ Stack installée