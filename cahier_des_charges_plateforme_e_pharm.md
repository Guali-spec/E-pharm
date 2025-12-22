# Cahier des charges – Plateforme **E-Pharm**

## 1. Contexte et objectifs du projet

### 1.1 Nom du projet

**E-Pharm**

### 1.2 Contexte

L’accès aux médicaments reste complexe dans de nombreuses zones, notamment en Afrique de l’Ouest, en raison de la dispersion des pharmacies, du manque d’information en temps réel sur la disponibilité des produits, et des contraintes de déplacement. Le développement du numérique et de la géolocalisation ouvre de nouvelles opportunités pour améliorer cet accès de manière sécurisée et fiable.

### 1.3 Objectifs du projet

Le projet E-Pharm a pour objectifs principaux :

- Faciliter l’accès rapide et fiable aux médicaments ;
- Réduire les déplacements inutiles des patients ;
- Lutter contre la circulation de médicaments contrefaits ;
- Mettre en relation utilisateurs, pharmacies agréées et services de livraison ;
- Poser les bases d’un écosystème e-santé évolutif en Afrique de l’Ouest.

## 2. Présentation de la plateforme

E-Pharm est une plateforme numérique de services pharmaceutiques permettant aux utilisateurs de rechercher des médicaments, localiser des pharmacies, passer commande et suivre la livraison ou le retrait en officine. La solution intègre des fonctionnalités modernes telles que la géolocalisation précise, des moyens de paiement flexibles et des briques d’intelligence artificielle.

## 3. Public cible

- Grand public (patients et particuliers) ;
- Pharmacies agréées partenaires ;
- Services de livraison partenaires ;
- [Publics institutionnels ou entreprises – à préciser].

## 4. Plateformes et déploiement

### 4.1 Version initiale (V1)

- Plateforme web responsive ;
- Compatible smartphones, tablettes et ordinateurs.

### 4.2 Version V1.1

- Transformation en Progressive Web App (PWA) incluant :
  - installation sur smartphone ;
  - notifications push ;
  - performances optimisées pour le mobile.

### 4.3 Perspectives

- Développement d’applications mobiles natives Android et iOS.

## 5. Accès à la plateforme

### 5.1 Accès sans compte

Un utilisateur non connecté peut :

- Accéder à la page d’accueil ;
- Rechercher un médicament (consultation simple) ;
- Consulter les pharmacies de garde et leur calendrier ;
- Visualiser les pharmacies sur une carte ;
- Localiser une pharmacie et obtenir un itinéraire ;
- Consulter la distance estimée, les horaires, le numéro de téléphone et le statut (ouverte / de garde).

**NB:** la commande et le paiement nécessitent obligatoirement la création d’un compte.

## 6. Gestion des comptes utilisateurs

### 6.1 Inscription

Informations requises :

- Nom ;
- Prénoms ;
- Numéro de téléphone ;
- Ville / Pays ;
- Mot de passe.

### 6.2 Connexion

- Numéro de téléphone ;
- Mot de passe.

## 7. Page d’accueil

La page d’accueil affiche :

- Un message personnalisé : « Salut [Prénom] » ;
- Une barre de recherche de médicaments ;
- Des actions rapides :
  - Commander un médicament ;
  - Carte des pharmacies ;
  - Pharmacies de garde ;
  - Calendrier ;
  - Mon compte.

## 8. Cartographie et géolocalisation

### 8.1 Carte des pharmacies

- Intégration de Google Maps ;
- Affichage des pharmacies par repères (pins) ;
- Filtres disponibles :
  - pharmacies proches ;
  - pharmacies de garde ;
  - pharmacies ouvertes (si données disponibles).

### 8.2 Fiche pharmacie

La fiche pharmacie affiche :

- Nom ;
- Adresse ;
- Téléphone ;
- Horaires ;
- Boutons d’action :
  - itinéraire ;
  - suivi sur la carte.

## 9. Recherche de médicaments

### 9.1 Fonctionnement

- Recherche par nom de médicament ;
- Résultats filtrés par localité.

### 9.2 Résultats affichés

- Nom du médicament ;
- Prix ;
- Pharmacie ;
- Ville / quartier ;
- Disponibilité :
  - en stock ;
  - stock limité ;
  - indisponible.

### 9.3 Recherche intelligente (IA – V1)

- Auto-correction des termes ;
- Suggestions intelligentes ;
- Support des noms commerciaux et DCI ;
- Proposition de médicaments génériques en cas d’indisponibilité.

## 10. Fiche médicament

La fiche médicament affiche :

- Nom ;
- Prix ;
- Pharmacie(s) proposant le produit ;
- Disponibilité ;
- Statut (original / générique) ;
- Bouton « Commander » ;
- Téléversement d’ordonnance (optionnel).

## 11. Processus de commande

### 11.1 Informations collectées

- Nom ;
- Prénom ;
- Numéro de téléphone ;
- Ordonnance (si nécessaire) ;
- Mode de réception :
  - livraison ;
  - retrait en pharmacie.

### 11.2 Livraison et géolocalisation précise

- Autorisation GPS obligatoire ;
- Sélection d’un point précis sur Google Maps ;
- Champs obligatoires :
  - quartier ;
  - description ou repère ;
- Données stockées :
  - latitude ;
  - longitude ;
  - précision GPS ;
  - adresse approximative.

### 11.3 Calcul du coût

- Prix du médicament ;
- Frais de livraison calculés en fonction de la distance.

## 12. Paiement

### 12.1 Paiement en ligne

- Mobile money et/ou carte bancaire ;
- Génération d’un reçu avec statut « Payé ».

### 12.2 Paiement en liquide

- Génération d’un reçu « Non payé » ;
- Paiement au livreur (livraison) ou à la pharmacie (retrait) ;
- Mise à jour du statut après confirmation du paiement.

## 13. Suivi de commande

### 13.1 Statuts de commande

- Commande créée ;
- Préparation en pharmacie ;
- En route / prête pour retrait ;
- Livrée / retirée.

### 13.2 Notifications

- SMS ;
- Notifications PWA ;
- WhatsApp (perspective).

## 14. Profil utilisateur

Fonctionnalités disponibles :

- Modification des informations personnelles ;
- Historique des commandes ;
- Téléchargement des reçus ;
- Recommandation de médicaments ;
- Suivi des paiements.

## 15. Intelligence artificielle

### 15.1 IA intégrée dès la V1

- OCR des ordonnances :
  - extraction automatique des médicaments ;
  - pré-remplissage du panier ;
- Recherche intelligente ;
- Suggestions de substituts.

### 15.2 IA en perspective

- Assistant santé conversationnel ;
- Rappels de prise de médicaments ;
- Analyse prédictive de la demande ;
- Recommandations personnalisées.

## 16. Back-office pharmacies (V1)

Fonctionnalités prévues :

- Réception et gestion des commandes ;
- Consultation des ordonnances ;
- Mise à jour des statuts de commande ;
- Confirmation des paiements en liquide ;
- Gestion des horaires d’ouverture ;
- Mise à jour de la disponibilité des médicaments (en stock / stock limité / indisponible) ;
- Historique des commandes traitées.

## 17. Profil administrateur (Admin)

Le profil administrateur dispose d’un accès complet à la plateforme afin d’assurer la supervision, la gestion opérationnelle et la conformité réglementaire.

### 17.1 Gestion des utilisateurs

- Consultation de la liste des utilisateurs ;
- Activation / désactivation de comptes ;
- Gestion des rôles (utilisateurs, pharmacies, livreurs) ;
- Accès à l’historique global des commandes.

### 17.2 Gestion des pharmacies

- Ajout, modification et suppression de pharmacies ;
- Validation des pharmacies partenaires (agrément) ;
- Gestion des informations (horaires, localisation, statut) ;
- Supervision des pharmacies de garde.

### 17.3 Gestion des médicaments

- Gestion du référentiel médicaments (noms commerciaux et DCI) ;
- Gestion des catégories de médicaments ;
- Supervision des prix (consultation uniquement) ;
- Gestion des médicaments génériques et équivalents.

### 17.4 Gestion des commandes et paiements

- Suivi global des commandes ;
- Supervision des paiements (en ligne et en liquide) ;
- Accès aux reçus et statuts de paiement ;
- Gestion des litiges et incidents.

### 17.5 Statistiques et reporting

- Tableaux de bord (commandes, utilisateurs, pharmacies) ;
- Statistiques de performance ;
- Export des données (CSV / PDF) [à préciser].

### 17.6 Sécurité et conformité

- Journalisation des actions administrateur ;
- Gestion des accès et permissions ;
- Supervision de la conformité réglementaire.

## 18. Progressive Web App (PWA)

## 17. Progressive Web App (PWA)

Fonctionnalités clés :

- Installation sur smartphone ;
- Mode hors ligne partiel ;
- Cache intelligent ;
- Notifications push ;
- Performances optimisées.

## 19. Spécifications techniques

### 19.1 Architecture générale

- Architecture web moderne orientée API ;
- Séparation front-end / back-end ;
- Hébergement cloud évolutif.

### 19.2 Technologies front-end

- Framework JavaScript moderne (ex. React, Vue.js ou équivalent) ;
- HTML5 / CSS3 ;
- Design responsive (mobile-first) ;
- Intégration Google Maps API.

### 19.3 Technologies back-end

- API REST sécurisée ;
- Langage serveur : [Node.js / Python / PHP – à préciser] ;
- Framework back-end : [Express, Django, Laravel – à préciser] ;
- Gestion des rôles et permissions.

### 19.4 Base de données

- Base de données relationnelle ou NoSQL : [PostgreSQL / MySQL / MongoDB – à préciser] ;
- Stockage sécurisé des documents (ordonnances).

### 19.5 Paiement et services tiers

- Intégration services Mobile Money ;
- Intégration paiement par carte bancaire ;
- API SMS pour notifications ;
- API WhatsApp (en perspective).

### 19.6 Sécurité technique

- Chiffrement HTTPS / SSL ;
- Hashage des mots de passe ;
- Protection contre les attaques courantes (XSS, CSRF, injections) ;
- Sauvegardes automatiques.

## 20. Sécurité et conformité

- Chiffrement des données sensibles ;
- Stockage sécurisé des ordonnances ;
- Accès réservé aux pharmacies agréées ;
- Respect des réglementations locales ;
- Traçabilité complète des commandes.

## 19. Perspectives d’évolution (Roadmap)

- **V2 – Expérience utilisateur** : notifications intelligentes, pharmacies favorites, amélioration UI/UX ;
- **V3 – Santé connectée** : profil santé, rappels, chat avec pharmacien ;
- **V4 – Famille et fidélisation** : multi-profils, fidélité, abonnements pour traitements chroniques ;
- **V5 – Écosystème santé** : téléconsultation, ordonnances électroniques, intégration assurances ;
- **V6 – Performance et IA** : optimisation logistique, prévisions de stocks ;
- **V7 – Expansion** : multi-pays, multi-devises, adaptation réglementaire.

## 20. Planning prévisionnel

[Information manquante à préciser]

## 21. Livrables attendus

[Information manquante à préciser]

## 22. Budget estimatif

[Information manquante à préciser]

## 23. Conclusion

E-Pharm est conçue comme une plateforme simple d’utilisation dès le lancement, innovante mais réaliste, évolutive et adaptée aux besoins concrets des utilisateurs et des pharmacies partenaires. Ce cahier des charges constitue une base structurante pour le développement, le déploiement et l’évolution de la solution.

