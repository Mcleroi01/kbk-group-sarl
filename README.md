# KBK GROUP SARL · Plateforme Corporate Premium

Vitrine numérique officielle de **KBK GROUP SARL**, groupe multisectoriel basé à Kinshasa en République démocratique du Congo.

> **Devise officielle :** *« L'effort fait le fort »*

---

## 1. Identité & Positionnement

- **Entreprise** : KBK GROUP SARL
- **Forme Juridique** : Société à Responsabilité Limitée (SARL)
- **Siège Administratif** : Kinshasa, République démocratique du Congo
- **Direction Générale** : Olivier Kanyinda (également responsable de OLKAN TRANSP SARL et fondateur du Club des entrepreneurs à succès)
- **4 Secteurs d'Activité Annoncés** :
  - **Mines** (écosystème minier congolais, cuivre, cobalt, sous-traitance industrielle)
  - **Numérique** (solutions technologiques, digitalisation, infrastructures data)
  - **Négoce** (intermédiation commerciale, approvisionnements stratégiques, sourcing)
  - **Logistique** (transport multimodal, corridor Kinshasa - Matadi, fret lourd)
- **Pôles Économiques Mentionnés** : Kinshasa, Matadi, Kolwezi, Lubumbashi
- **Canaux Officiels Communiqués** :
  - LinkedIn : [KBK GROUP SARL](https://www.linkedin.com/in/kbk-group-sarl-946884319/)
  - Compte X : [@Olivierkanyind](https://x.com/Olivierkanyind)

---

## 2. Caractéristiques de la Solution

- **Direction Artistique Premium & Mode Clair/Sombre** : Charte inspirée directement du logo officiel, typographie équilibrée, palette contrastée bordeaux `#821828`, noir graphite et ivoire lumineux.
- **Architecture Multipage Complète** : Routes dédiées (`/`, `/a-propos`, `/secteurs`, `/secteurs/:slug`, `/implantation`, `/actualites`, `/actualites/:slug`, `/carrieres`, `/contact`, `/mentions-legales`, `/politique-confidentialite`).
- **Rubrique Actualités Visuelles & Éditoriales (`/actualites`)** :
  - En-tête éditorial « Actualités et perspectives » avec fil d'Ariane.
  - Chaque article dispose de sa propre photographie haute définition (Kinshasa, corridor de Matadi, mines de Kolwezi, data center).
  - Format « À la une » en grand format visuel et grille d'articles avec filtres sectoriels.
  - Page de détail (`/actualites/:slug`) avec grande image légendée, métadonnées complètes, statut éditorial transparent, bouton de copie de lien avec notification et recommandations visuelles.
- **Espace Carrières & Talents (`/carrieres`)** :
  - Présentation de la culture d'entreprise fondée sur le mérite et la devise *« L'effort fait le fort »*.
  - Transparence absolue : aucune offre fictive, valorisation des **candidatures spontanées** pour les compétences nationales et de la diaspora congolaise.
  - 5 pôles de compétences et métiers (Mines, Numérique, Négoce, Logistique, Fonctions support).
  - Processus de sélection en 4 étapes claires.
  - Formulaire interactif de candidature spontanée avec dépôt de CV, validation stricte et accusé de réception officiel instantané (numéro de suivi `KBK-TALENT-2026-XXXX`).
  - Foire aux questions (FAQ) dynamique sur les recrutements.
- **Cartographie Stratégique Vectorielle de la RDC** : Carte SVG interactive avec mise en valeur des 4 bassins économiques (Kinshasa, Matadi, Kolwezi, Lubumbashi).
- **Documentation d'Architecture NestJS** : Spécifications complètes dans `BACKEND_ARCHITECTURE.md` et modale interactive.

---

## 3. Commandes de Lancement

### Développement
```bash
npm install
npm run dev
```
L'application démarre sur `http://localhost:3000`.

### Vérification & Lint
```bash
npm run lint
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 4. Transition vers le Backend NestJS

Consultez le fichier `BACKEND_ARCHITECTURE.md` pour le schéma Prisma ORM, les DTOs `class-validator`, et la configuration de l'API REST avec NestJS et PostgreSQL.
