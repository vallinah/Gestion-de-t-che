# 🎨 DESIGN SYSTEM — GESTION DE TÂCHE

## 1. Identité visuelle

### Direction générale

L'application **Gestion de tâche** doit avoir une identité :

* Moderne
* Professionnelle
* Simple
* Claire
* Minimaliste
* Orientée productivité
* Facile à utiliser
* Responsive
* Accessible

### Palette principale

L'identité principale repose sur :

**Indigo + Violet + Slate + Blanc**

La couleur primaire est l'**Indigo**.
Le violet sert principalement d'accent.

---

# 2. 🎨 Palette de couleurs

## Couleurs principales

| Nom          | Couleur      | Hex       | Utilisation                          |
| ------------ | ------------ | --------- | ------------------------------------ |
| Primary      | Indigo       | `#6366F1` | Boutons, liens, éléments actifs      |
| Primary Dark | Indigo foncé | `#4F46E5` | Hover, focus, éléments importants    |
| Accent       | Violet       | `#8B5CF6` | Accents visuels, gradients éventuels |
| Success      | Vert         | `#22C55E` | Tâches terminées, succès             |
| Warning      | Ambre        | `#F59E0B` | Tâches en cours, avertissements      |
| Danger       | Rouge        | `#EF4444` | Erreurs, tâches urgentes             |
| Info         | Bleu         | `#3B82F6` | Informations                         |

---

# 3. 🌤️ Couleurs Light Mode

## Background

```text
Background principal : #F8FAFC
Surface / Cards       : #FFFFFF
Surface secondaire   : #F1F5F9
```

## Texte

```text
Texte principal       : #0F172A
Texte secondaire      : #64748B
Texte désactivé       : #94A3B8
Texte sur Primary     : #FFFFFF
```

## Bordures

```text
Border principal      : #E2E8F0
Border secondaire     : #CBD5E1
```

## États

```text
Success               : #22C55E
Success background    : #DCFCE7

Warning               : #F59E0B
Warning background    : #FEF3C7

Danger                : #EF4444
Danger background     : #FEE2E2

Info                  : #3B82F6
Info background       : #DBEAFE
```

---

# 4. 🌙 Couleurs Dark Mode

## Background

```text
Background principal : #0F172A
Surface / Cards       : #1E293B
Surface secondaire   : #334155
```

## Texte

```text
Texte principal       : #F8FAFC
Texte secondaire      : #94A3B8
Texte désactivé       : #64748B
Texte sur Primary     : #FFFFFF
```

## Bordures

```text
Border principal      : #334155
Border secondaire     : #475569
```

## Couleurs principales Dark Mode

```text
Primary               : #818CF8
Primary Dark          : #6366F1
Accent                : #A78BFA
```

## États Dark Mode

```text
Success               : #4ADE80
Warning               : #FBBF24
Danger                : #F87171
Info                  : #60A5FA
```

---

# 5. 🖥️ Structure générale

## Application

L'application doit utiliser une structure claire :

```text
┌─────────────────────────────────────────────┐
│ Header / Topbar                             │
├──────────────┬──────────────────────────────┤
│              │                              │
│   Sidebar    │       Main Content           │
│              │                              │
│              │                              │
│              │                              │
└──────────────┴──────────────────────────────┘
```

### Sidebar

Light Mode :

```text
Background : #FFFFFF
Border     : #E2E8F0
```

Dark Mode :

```text
Background : #1E293B
Border     : #334155
```

### Élément actif de la sidebar

```text
Background : #EEF2FF
Text       : #4F46E5
Icon       : #6366F1
```

Dark Mode :

```text
Background : #312E81
Text       : #A5B4FC
Icon       : #818CF8
```

---

# 6. 🔘 Boutons

## Primary Button

```text
Background : #6366F1
Text       : #FFFFFF
Hover      : #4F46E5
```

Exemple :

```text
+ Ajouter une tâche
```

## Secondary Button

```text
Background : #FFFFFF
Text       : #0F172A
Border     : #E2E8F0
Hover      : #F8FAFC
```

## Danger Button

```text
Background : #EF4444
Text       : #FFFFFF
Hover      : #DC2626
```

## Ghost Button

```text
Background : transparent
Text       : #64748B
Hover      : #F1F5F9
```

---

# 7. 📝 Champs de formulaire

## Input

Light Mode :

```text
Background : #FFFFFF
Border     : #E2E8F0
Text       : #0F172A
Placeholder: #94A3B8
```

Focus :

```text
Border     : #6366F1
Ring       : #EEF2FF
```

Dark Mode :

```text
Background : #1E293B
Border     : #475569
Text       : #F8FAFC
Placeholder: #64748B
```

Focus :

```text
Border     : #818CF8
Ring       : #312E81
```

---

# 8. 📋 Tâches

Chaque tâche doit être représentée sous forme de **Card** ou d'élément clairement identifiable.

## Card

Light Mode :

```text
Background : #FFFFFF
Border     : #E2E8F0
```

Dark Mode :

```text
Background : #1E293B
Border     : #334155
```

### Informations d'une tâche

Une tâche peut contenir :

```text
Titre
Description
Priorité
Statut
Date limite
Projet
Tags
Actions
```

---

# 9. 🏷️ Statuts des tâches

## À faire

```text
Color      : #64748B
Background : #F1F5F9
```

## En cours

```text
Color      : #D97706
Background : #FEF3C7
```

## Terminée

```text
Color      : #16A34A
Background : #DCFCE7
```

## Annulée

```text
Color      : #DC2626
Background : #FEE2E2
```

---

# 10. 🚨 Priorités

## Faible

```text
Color      : #64748B
Background : #F1F5F9
```

## Moyenne

```text
Color      : #D97706
Background : #FEF3C7
```

## Haute

```text
Color      : #EA580C
Background : #FFEDD5
```

## Urgente

```text
Color      : #DC2626
Background : #FEE2E2
```

Les couleurs de priorité doivent rester secondaires.

La couleur primaire `#6366F1` ne doit pas être utilisée pour représenter une priorité.

---

# 11. 📊 Dashboard

Le Dashboard doit être visuellement simple.

## Statistiques principales

Exemples :

```text
Total des tâches
Tâches terminées
Tâches en cours
Tâches en retard
```

Chaque statistique peut être affichée dans une Card.

### Exemple

```text
┌──────────────────────┐
│ Total des tâches     │
│                      │
│ 24                   │
│ +12% cette semaine   │
└──────────────────────┘
```

Les cards doivent utiliser :

```text
Background : #FFFFFF
Border     : #E2E8F0
Radius     : rounded-xl
```

---

# 12. 📈 Graphiques

Les graphiques doivent principalement utiliser :

```text
Primary : #6366F1
Accent  : #8B5CF6
Success : #22C55E
Warning : #F59E0B
Danger  : #EF4444
```

Ne pas utiliser toutes les couleurs simultanément.

Les couleurs doivent avoir une signification.

---

# 13. ✍️ Typographie

## Police recommandée

Utiliser :

```text
Inter
```

Fallback :

```text
system-ui
sans-serif
```

## Hiérarchie

### H1

```text
Font size : 30px - 36px
Weight    : 700
Color     : #0F172A
```

### H2

```text
Font size : 24px - 30px
Weight    : 700
```

### H3

```text
Font size : 18px - 20px
Weight    : 600
```

### Body

```text
Font size : 14px - 16px
Weight    : 400
Color     : #64748B
```

### Small

```text
Font size : 12px - 14px
Color     : #94A3B8
```

---

# 14. 📐 Border Radius

Utiliser des angles légèrement arrondis.

```text
Small elements : rounded-md
Buttons        : rounded-lg
Inputs         : rounded-lg
Cards          : rounded-xl
Modals         : rounded-2xl
```

Éviter les éléments excessivement arrondis.

Les boutons et cards doivent rester modernes et professionnels.

---

# 15. 🌫️ Ombres

Les ombres doivent être discrètes.

## Card

```text
shadow-sm
```

## Modal / Dropdown

```text
shadow-lg
```

Éviter les grosses ombres très visibles.

L'interface doit rester légère.

---

# 16. 📏 Espacement

Utiliser principalement le système d'espacement Tailwind.

```text
4px
8px
12px
16px
20px
24px
32px
40px
48px
64px
```

Privilégier :

```text
p-4
p-6
gap-4
gap-6
space-y-4
space-y-6
```

Éviter les espacements arbitraires sauf nécessité.

---

# 17. 📱 Responsive Design

L'application doit être pensée **mobile-first**.

## Desktop

```text
Sidebar visible
Dashboard en plusieurs colonnes
Tableaux complets
```

## Tablet

```text
Sidebar réduite
Cards adaptées
```

## Mobile

```text
Sidebar transformée en menu
Cards empilées
Boutons adaptés
Tableaux transformés en Cards si nécessaire
```

La navigation doit rester simple sur mobile.

---

# 18. 🌗 Dark Mode

Le Dark Mode doit être prévu dès le début du développement.

### Light

```text
Background : #F8FAFC
Surface    : #FFFFFF
Text       : #0F172A
Secondary  : #64748B
Border     : #E2E8F0
Primary    : #6366F1
```

### Dark

```text
Background : #0F172A
Surface    : #1E293B
Text       : #F8FAFC
Secondary  : #94A3B8
Border     : #334155
Primary    : #818CF8
```

---

# 19. 🎯 Règles d'utilisation des couleurs

## Règle 1 — Une couleur principale

La couleur principale de l'application est :

```text
#6366F1
```

Elle doit être utilisée pour :

* CTA principaux
* Liens
* Navigation active
* Focus
* Actions importantes
* Éléments sélectionnés

## Règle 2 — Ne pas surcharger l'interface

Ne pas utiliser toutes les couleurs disponibles en même temps.

## Règle 3 — Les couleurs doivent avoir une signification

```text
Vert    → Succès / terminé
Orange  → Attention / en cours
Rouge   → Erreur / urgent
Bleu    → Information
Indigo  → Action principale
Violet  → Accent
```

## Règle 4 — Le rouge doit rester rare

Le rouge doit être réservé à :

* Erreurs
* Suppression
* Tâches urgentes
* Alertes importantes

## Règle 5 — Le violet est secondaire

Le violet `#8B5CF6` peut être utilisé pour :

* Accents
* Illustrations
* Gradients
* Éléments décoratifs

Il ne doit pas remplacer systématiquement l'indigo.

---

# 20. 🎨 Gradient optionnel

Un gradient peut être utilisé uniquement pour certains éléments visuels.

```text
#6366F1 → #8B5CF6
```

Exemples :

* Illustration du dashboard
* Header spécial
* Empty state
* Page d'accueil
* Avatar ou élément décoratif

Éviter d'utiliser le gradient sur tous les boutons et cards.

---

# 21. 🧩 Tailwind CSS — Configuration de référence

Si une palette personnalisée est nécessaire :

```js
colors: {
  primary: {
    50: '#EEF2FF',
    100: '#E0E7FF',
    200: '#C7D2FE',
    300: '#A5B4FC',
    400: '#818CF8',
    500: '#6366F1',
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#312E81',
  },

  accent: {
    500: '#8B5CF6',
  },

  success: {
    500: '#22C55E',
  },

  warning: {
    500: '#F59E0B',
  },

  danger: {
    500: '#EF4444',
  },

  info: {
    500: '#3B82F6',
  },
}
```

---

# 22. 🧱 Composants à standardiser

Tous les composants doivent suivre ce design system.

```text
Button
Input
Select
Checkbox
Radio
Textarea
Modal
Dropdown
Card
Badge
Alert
Toast
Navbar
Sidebar
Pagination
Table
Task Card
Task List
Avatar
Tooltip
Empty State
Loading State
```

---

# 23. 🗂️ Architecture visuelle du projet

Les principales pages devraient suivre la même identité.

```text
/login
/register
/forgot-password
/reset-password

/dashboard

/tasks
/tasks/create
/tasks/:id
/tasks/:id/edit

/projects
/projects/create
/projects/:id

/profile
/settings
```

Toutes les pages doivent conserver :

```text
Même typographie
Même palette
Même système d'espacement
Même radius
Même style de boutons
Même style de formulaires
Même comportement responsive
Même Dark Mode
```

---

# 24. ⭐ Résumé de l'identité

### Couleur principale

```text
#6366F1
```

### Couleur principale foncée

```text
#4F46E5
```

### Accent

```text
#8B5CF6
```

### Background

```text
#F8FAFC
```

### Surface

```text
#FFFFFF
```

### Texte

```text
#0F172A
```

### Texte secondaire

```text
#64748B
```

### Border

```text
#E2E8F0
```

### Success

```text
#22C55E
```

### Warning

```text
#F59E0B
```

### Danger

```text
#EF4444
```

### Police

```text
Inter
```

### Style

```text
Modern
Minimal
Professional
Productivity-focused
Responsive
Light + Dark Mode
```

---

# 25. 🚀 Principe final

L'objectif n'est pas de créer une interface très colorée.

L'objectif est de créer une interface où :

**la couleur guide l'utilisateur.**

La majorité de l'interface doit rester neutre :

```text
Blanc
Slate
Gris clair
```

Puis les couleurs servent à attirer l'attention là où elle est nécessaire :

```text
Indigo → Action
Vert   → Succès
Orange → Attention
Rouge  → Urgence
Bleu   → Information
Violet → Accent
```

Cela permet d'obtenir une application de gestion de tâches **professionnelle, lisible et cohérente**, tout en laissant suffisamment de liberté pour faire évoluer le design par la suite.
