# Fan site Naâman

Fan site **non officiel** consacré à Naâman, chanteur reggae français, réalisé en HTML, CSS et JavaScript vanilla dans le cadre de ma formation à [La Plateforme](https://laplateforme.io/).

**[Voir le site en ligne](https://flavie-michel.students-laplateforme.io/fansite/)**

<!-- Captures : ajouter docs/screenshots/desktop.png et docs/screenshots/mobile.png, puis décommenter
<p>
  <img src="docs/screenshots/desktop.png" alt="Page d'accueil sur ordinateur" width="70%">
  <img src="docs/screenshots/mobile.png" alt="Page d'accueil sur mobile" width="25%">
</p>
-->

## Le projet

Un site vitrine de 9 pages autour de l'artiste :

| Page | Contenu |
|---|---|
| Accueil | Biographie et accès rapide aux rubriques |
| Actualité | Dernières nouvelles |
| Réalisations | Albums, mixtapes et EPs |
| Évènements | Concerts et enregistrements live |
| Photos | Galeries de concerts et de voyages |
| Vidéos | Lives intégrés depuis YouTube |
| Réseaux sociaux | Liens vers les plateformes et les sites de fans |
| Contact | Formulaire (démonstration, aucun envoi) |
| Mentions légales | Éditrice, hébergement, crédits, cookies |

## Compétences mises en œuvre

- **HTML sémantique** : `header`, `nav`, `main`, `section`, `footer`, formulaire avec labels associés et validation native
- **CSS** : Flexbox, variables CSS, dégradés, transitions, sous-menus déroulants
- **Responsive** : menu burger sous 800px, mise en page en colonne sous 600px, iframes en `aspect-ratio`
- **JavaScript vanilla** : ouverture du menu burger (`aria-expanded`), confirmation du formulaire de démo
- **Accessibilité** : lien d'évitement, focus clavier visible, textes alternatifs, contrastes vérifiés
- **Performance et SEO** : images en `loading="lazy"` avec dimensions, balises `description` et Open Graph, contenus tiers en mode respectueux de la vie privée (`youtube-nocookie.com`)

## Arborescence

```
fansite/
├── index.html, actualite.html, realisations.html, evenements.html,
│   photos.html, videos.html, liens.html, contact.html, mentions-legales.html
└── assets/
    ├── css/fansite.css
    ├── js/menu.js, contact.js
    └── img/
```

## Lancer en local

Aucune dépendance : ouvrir `index.html` dans un navigateur, ou servir le dossier avec n'importe quel serveur statique (Laragon, `python -m http.server`…).

## Crédits et droits

Projet pédagogique sans but commercial. Naâman, ses œuvres, les pochettes et les photos appartiennent à leurs ayants droit respectifs (photos : Mikael Thuillier, Faya Burn Prod…). Vidéos et musique intégrées depuis YouTube et Spotify.

Réalisé par **Flavie Michel**.
