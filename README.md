# Flavor — Maison Solène

Site vitrine pour un restaurant gastronomique fictif. **100 % frontend**, aucune
base de données ni authentification : tout est statique ou simulé côté client.

## Aperçu

- **Hero** plein écran avec image Unsplash et CTA de réservation.
- **Philosophie** du chef (texte + image).
- **Menu** typographique en 3 catégories (entrées, plats, desserts).
- **Galerie** de 8 photos avec lightbox au clavier (← → Échap).
- **Réservation** : formulaire qui simule une confirmation (aucune donnée envoyée).
- **Footer** : adresse, horaires, réseaux fictifs.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript strict
- CSS Modules (aucune librairie UI)
- `next/font` (Cormorant Garamond + Jost)
- `next/image` avec images Unsplash distantes

## Direction artistique

Luxe discret : fond `#0c0a09`, texte crème `#e8dcc8`, accent doré `#c9a96e`.
Beaucoup d'espace négatif, fade-ins lents au scroll, serif élégante en titres.

## Lancer en local

```bash
# à la racine du monorepo
npm install
cd apps/flavor
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build && npm run start
```

## Déploiement

Déployable tel quel sur Vercel, **sans aucune variable d'environnement**.
Sur Vercel, réglez le *Root Directory* sur `apps/flavor`.
