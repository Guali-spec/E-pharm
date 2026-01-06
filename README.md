# E-Pharm — Projet éducatif (Burkina Faso 🇧🇫 | Koudougou)

## 📌 Présentation générale

**E-Pharm** est un projet éducatif dont l’objectif est d’apprendre à construire une
plateforme web moderne de type **e-pharmacie**, en suivant une démarche
professionnelle, progressive et compréhensible pour un **débutant**.

Le projet s’appuie sur un **cas réel** (la ville de Koudougou, au Burkina Faso),
mais utilise uniquement des **données simulées** à des fins d’apprentissage.

---

## 🎯 Objectifs pédagogiques

Ce projet a pour but de te permettre de :

- comprendre la différence entre **frontend**, **backend** et **base de données**
- apprendre à structurer un projet réel
- utiliser **Git et GitHub** correctement
- comprendre et utiliser **Docker**
- lancer une base de données **PostgreSQL** en local
- développer une API avec **NestJS**
- utiliser un ORM moderne (**Prisma**)
- créer une interface web avec **React**
- progresser étape par étape, sans magie

---

## 🧠 Philosophie du projet

- 📖 **Documentation avant le code**
- 🧱 **Fondations solides avant les fonctionnalités**
- 🐢 **Progression lente mais sûre**
- ❓ Chaque outil est expliqué avant d’être utilisé
- 🧑‍💻 Projet pensé pour **apprendre**, pas juste “faire marcher”

---

## 🏗️ Architecture générale

Le projet est composé de 3 grandes parties :


Frontend (React) → Interface utilisateur
Backend (NestJS) → API / logique métier
Base de données → PostgreSQL (via Docker)


Schéma simplifié :

Navigateur
↓
Frontend (React)
↓ HTTP
Backend (NestJS)
↓ ORM (Prisma)
PostgreSQL (Docker)



---

## 📁 Structure du projet


e-pharm/
├── frontend/ # Application frontend (React)
├── backend/ # API backend (NestJS)
├── docker/ # Configuration Docker (PostgreSQL)
│ └── docker-compose.yml
├── docs/ # Documentation et apprentissage
│ ├── README.md
│ ├── decisions.md
│ └── troubleshooting.md
├── scripts/ # Scripts utilitaires (plus tard)
├── .gitignore
├── GUIDE.md # Guide détaillé du projet (pas à pas)
└── README.md # Ce fichier



---

## 🛠️ Stack technique

### Frontend
- React
- Vite
- TypeScript

### Backend
- Node.js
- NestJS

### Base de données
- PostgreSQL
- Docker & Docker Compose

### ORM
- Prisma (à venir)

### Outils
- Git / GitHub
- VS Code
- Docker Desktop

---

## 🐳 Docker et base de données

La base de données **PostgreSQL** n’est **pas installée directement sur Windows**.

Elle est lancée via **Docker**, ce qui permet :
- une installation simple
- une configuration identique partout
- d’éviter les problèmes système

### Lancer la base de données
À la racine du projet :

```bash
docker compose -f docker/docker-compose.yml up -d
```

Vérifier qu’elle tourne :

docker ps
