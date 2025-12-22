# GUIDE COMPLET  — E‑Pharm (Windows)
## Objectif : apprendre en construisant (Frontend + Backend + DB simulée + GitHub)

> Contexte du projet : **Burkina Faso → Koudougou**.  
> Objectif éducatif : construire une plateforme type **E‑Pharm** avec une **base de données simulée** (pas besoin de contacter de vraies pharmacies).

---

## Table des matières
1. [Comment utiliser ce guide](#comment-utiliser-ce-guide)
2. [Vue d’ensemble du projet](#vue-densemble-du-projet)
3. [Glossaire (mots importants)](#glossaire-mots-importants)
4. [Requirements (à installer sur Windows)](#requirements-à-installer-sur-windows)
5. [Outils “requirements” en Node.js](#outils-requirements-en-nodejs)
6. [Structure du projet (squelette)](#structure-du-projet-squelette)
7. [Plan de travail (phases)](#plan-de-travail-phases)
8. [Phase 0 — Préparation](#phase-0--préparation)
9. [Phase 1 — Écrire la doc, puis créer le dépôt GitHub](#phase-1--écrire-la-doc-puis-créer-le-dépôt-github)
10. [Phase 2 — Mettre en place le squelette](#phase-2--mettre-en-place-le-squelette)
11. [Phase 3 — Base de données locale avec Docker](#phase-3--base-de-données-locale-avec-docker)
12. [Phase 4 — Backend NestJS](#phase-4--backend-nestjs)
13. [Phase 5 — Frontend React](#phase-5--frontend-react)
14. [Phase 6 — Prisma (explication + installation)](#phase-6--prisma-explication--installation)
15. [Dépannage (erreurs courantes)](#dépannage-erreurs-courantes)
16. [Règles Git (workflow solo simple)](#règles-git-workflow-solo-simple)
17. [Checklist “OK pour commencer le dev”](#checklist-ok-pour-commencer-le-dev)

---

## Comment utiliser ce guide

- **Lis d’abord**, puis exécute.
- Ne saute pas les étapes.
- Après chaque étape, tu dois pouvoir répondre à :
  - *Qu’est-ce que j’ai fait ?*
  - *Pourquoi je l’ai fait ?*
  - *Comment je vérifie que ça marche ?*
- Note tes apprentissages dans `docs/decisions.md` et tes erreurs dans `docs/troubleshooting.md`.

---

## Vue d’ensemble du projet

Tu vas construire une application en 3 blocs :

1) **Frontend (React)** : l’interface utilisateur (web).  
2) **Backend (NestJS)** : l’API (le serveur) qui gère les règles, la sécurité, et parle à la base.  
3) **Base de données (PostgreSQL)** : stocke les pharmacies, médicaments, stocks, commandes… (simulé).

Schéma mental :
```
Navigateur (Frontend)
        |
        | HTTP (API)
        v
Serveur (Backend NestJS)
        |
        | ORM (Prisma)
        v
PostgreSQL (Docker)
```

---

## Glossaire (mots importants)

- **Frontend** : la partie visible par l’utilisateur (pages, boutons…).
- **Backend** : le serveur, la logique métier, la sécurité, les règles.
- **API** : ensemble d’URL (endpoints) que le frontend appelle. Ex : `GET /medicines`.
- **HTTP** : le “langage” de communication web (GET, POST…).
- **Base de données (DB)** : endroit où on stocke les données.
- **PostgreSQL** : type de base de données relationnelle.
- **Docker** : outil qui lance des services (Postgres) facilement sur ton PC.
- **ORM** : outil qui évite d’écrire du SQL à la main.
- **Prisma** : ORM (outil) qui fait le lien Backend ↔ DB.
- **Seed** : script qui remplit la DB avec des données fictives (simulation).
- **Repo GitHub** : dépôt où ton code est stocké en ligne (versionné).
- **Commit** : “photo” de ton code à un moment donné.

---

## Requirements (à installer sur Windows)

### Obligatoires
1. **Node.js 20 LTS** (installe aussi npm)
2. **Git**
3. **Docker Desktop**
4. **VS Code** (recommandé)

### Recommandés (facultatifs)
- Postman/Insomnia (tester l’API)
- DBeaver/pgAdmin (voir la DB)

### Vérification (commande)
Ouvre **PowerShell** ou le terminal VS Code, puis :
```bash
node -v
npm -v
git --version
docker --version
docker compose version
```
✅ Si tout répond correctement : OK.

---

## Outils “requirements” en Node.js

Tu as parlé de “requirements” (comme Python). En Node.js c’est différent :

### En Python
- Fichier : `requirements.txt`
- Commande : `pip install -r requirements.txt`

### En Node.js (ce projet)
- Fichier : **`package.json`**
- Commande : **`npm install`**

👉 Quand tu clones un projet Node :
- tu exécutes `npm install`
- ça installe **tout** ce qui est listé dans `package.json`.

---

## Structure du projet (squelette)

Nous voulons exactement ceci :

```
e-pharm/
├── frontend/                # React (UI)
├── backend/                 # NestJS (API)
├── docker/
│   └── docker-compose.yml   # PostgreSQL local
├── docs/
│   ├── README.md
│   ├── decisions.md
│   └── troubleshooting.md
├── scripts/                 # scripts utiles (plus tard)
├── .gitignore
├── README.md
└── GUIDE.md                 # ce guide
```

---

## Plan de travail (phases)

### Phase 0 — Préparation
Installer les outils et vérifier.

### Phase 1 — Documentation d’abord
Tu veux un guide clair **avant** de coder : on le fait (ce fichier).

### Phase 2 — Squelette du projet
Créer les dossiers, lancer un backend “Hello World”, lancer un frontend “Hello World”.

### Phase 3 — DB locale
Lancer PostgreSQL via Docker.

### Phase 4 — Backend NestJS
Structurer l’API.

### Phase 5 — Frontend React
Appels API + pages.

### Phase 6 — Prisma + Seed
Créer les tables + remplir la DB (simulation Koudougou).

Ensuite seulement :
- Recherche médicaments
- Commande
- Auth
- Back-office, Admin
- etc.

---

## Phase 0 — Préparation

✅ Objectif : être sûr que ton PC est prêt.

1) Installer Node 20 LTS  
2) Installer Git  
3) Installer Docker Desktop + redémarrer le PC si nécessaire  
4) Installer VS Code

Puis lancer la commande de vérification (section Requirements).

---

## Phase 1 — Écrire la doc, puis créer le dépôt GitHub

✅ Objectif : *tu sais où tu vas avant d’écrire du code*.

1) Crée un dossier vide `e-pharm/`
2) Ajoute ce guide dedans (ou télécharge le fichier fourni)
3) Crée `README.md` (petit résumé du projet)

**Pourquoi ?**  
Parce qu’un bon projet commence par une vision claire et une doc claire.

---

## Phase 2 — Mettre en place le squelette

### 2.1 Créer le dossier projet
Dans un terminal :
```bash
mkdir e-pharm
cd e-pharm
```

### 2.2 Créer les dossiers
```bash
mkdir frontend backend docker docs scripts
```

### 2.3 Créer les fichiers docs
Crée :
- `docs/README.md`
- `docs/decisions.md`
- `docs/troubleshooting.md`

### 2.4 Créer `.gitignore` (racine)
Crée `.gitignore` à la racine avec :
```gitignore
node_modules/
dist/
build/
.env
.env.*
.vscode/
.idea/
.DS_Store
```

> Note : on ajoutera plus tard des règles Prisma si nécessaire.

---

## Phase 3 — Base de données locale avec Docker

✅ Objectif : avoir PostgreSQL en local, sans installation compliquée.

### 3.1 Créer `docker/docker-compose.yml`
```yml
services:
  db:
    image: postgres:16
    container_name: epharm_db
    restart: unless-stopped
    environment:
      POSTGRES_USER: epharm
      POSTGRES_PASSWORD: epharm_password
      POSTGRES_DB: epharm
    ports:
      - "5432:5432"
    volumes:
      - epharm_data:/var/lib/postgresql/data

volumes:
  epharm_data:
```

### 3.2 Démarrer Postgres
```bash
docker compose -f docker/docker-compose.yml up -d
```

### 3.3 Vérifier
```bash
docker ps
```
Tu dois voir `epharm_db` en “Up”.

---

## Phase 4 — Backend NestJS

✅ Objectif : une API qui démarre.

### 4.1 Générer le backend
```bash
cd backend
npx @nestjs/cli new . --package-manager npm
```

### 4.2 Démarrer le backend
```bash
npm run start:dev
```

### 4.3 Vérifier
Ouvre : `http://localhost:3000`  
Tu dois voir “Hello World”.

---

## Phase 5 — Frontend React

✅ Objectif : une UI qui démarre.

### 5.1 Générer le frontend
```bash
cd ../frontend
npm create vite@latest . -- --template react-ts
npm install
npm run dev
```

### 5.2 Vérifier
Ouvre l’URL affichée (souvent `http://localhost:5173`).

---

## Phase 6 — Prisma (explication + installation)

### 6.0 Pourquoi Prisma ?
Prisma est un **ORM** : un outil qui permet de lire/écrire en DB sans écrire du SQL partout.

Au lieu d’écrire :
```sql
SELECT * FROM pharmacies;
```

Tu écris :
```ts
prisma.pharmacy.findMany()
```

### 6.1 Où vit Prisma ?
Uniquement dans le backend :
```
backend/prisma/schema.prisma
```

### 6.2 Ce que Prisma apporte
- **schema.prisma** : description des tables
- **migrations** : mise à jour de la DB quand le schéma change
- **prisma client** : code généré pour appeler la DB

### 6.3 Installation (quand on sera prêt)
Dans `backend/` :
```bash
npm install -D prisma
npm install @prisma/client
npx prisma init
```

✅ Résultat attendu :
- dossier `backend/prisma/`
- fichier `backend/prisma/schema.prisma`

> IMPORTANT : on ne fait pas la migration maintenant dans ce guide “squelette”.  
> On fera cela dans la phase “développement DB + seed”, après validation du repo.

---

## Dépannage (erreurs courantes)

### Docker ne répond pas
Erreur : `Cannot connect to the Docker daemon`  
✅ Solution : ouvrir Docker Desktop, attendre “Running”.

### Port 5432 déjà occupé
✅ Solution : changer le port dans compose :
```yml
ports:
  - "5433:5432"
```
Puis adapter `DATABASE_URL`.

### Backend port 3000 occupé
✅ Solution : fermer le process, ou utiliser un autre port plus tard.

### `npm` commande inconnue
✅ Solution : Node.js pas installé ou terminal pas redémarré.

---

## Règles Git (workflow solo simple)

- `main` = stable (toujours “propre”)
- travailler dans `feat/xxx`
- faire des commits petits

Conventions :
- `chore: ...` (setup)
- `feat: ...` (feature)
- `fix: ...` (bug)
- `docs: ...` (documentation)

---

## Checklist “OK pour commencer le dev”

Tu es prêt si :
- [ ] Node/Npm OK
- [ ] Git OK
- [ ] Docker OK
- [ ] Postgres tourne (`docker ps`)
- [ ] Backend démarre (`npm run start:dev`)
- [ ] Frontend démarre (`npm run dev`)
- [ ] La structure des dossiers correspond au plan

---

## Étape suivante (après mise à jour du guide)
Quand tu dis : **“OK, guide final validé”**, on fait :

1) Initialiser Git
2) Créer le dépôt GitHub
3) Faire le premier push
4) Ensuite seulement : Prisma + migration + seed Koudougou (pas à pas)

---

Fin.
