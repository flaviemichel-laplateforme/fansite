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

Un site vitrine de 10 pages autour de l'artiste :

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
| À propos | Pourquoi ce projet, choix techniques, difficultés |
| Mentions légales | Éditrice, hébergement, crédits, cookies |

## Compétences mises en œuvre

- **HTML sémantique** : `header`, `nav`, `main`, `section`, `footer`, formulaire avec labels associés et validation native
- **CSS** : Flexbox, variables CSS, dégradés, transitions, sous-menus déroulants
- **Responsive** : menu burger sous 800px, mise en page en colonne sous 600px, iframes en `aspect-ratio`
- **JavaScript vanilla** : ouverture du menu burger (`aria-expanded`), confirmation du formulaire de démo
- **Accessibilité** : lien d'évitement, focus clavier visible, textes alternatifs, contrastes vérifiés
- **Performance et SEO** : images en `loading="lazy"` avec dimensions, balises `description` et Open Graph, contenus tiers en mode respectueux de la vie privée (`youtube-nocookie.com`)

## Qualité mesurée

Audit [Lighthouse](https://developer.chrome.com/docs/lighthouse) 13.4.1 de la page d'accueil en ligne, le 27 octobre 2026 (mobile émulé Moto G Power, réseau 4G lent) :

| Performance | Accessibilité | Bonnes pratiques | SEO |
|:---:|:---:|:---:|:---:|
| **98** | **100** | **100** | **100** |

- Premier affichage (FCP) : 1,1 s · plus grand affichage (LCP) : 1,3 s · décalage de mise en page (CLS) : 0
- Bonnes pratiques passées de 77 à 100 en chargeant le lecteur Spotify au clic (plus de cookies tiers au chargement de la page)
- Les scores varient légèrement d'une mesure à l'autre

## Arborescence

```
fansite/
├── index.html, actualite.html, realisations.html, evenements.html,
│   photos.html, videos.html, liens.html, contact.html, a-propos.html, mentions-legales.html
└── assets/
    ├── css/fansite.css
    ├── js/menu.js, contact.js
    └── img/
```

## Lancer en local

Aucune dépendance : ouvrir `index.html` dans un navigateur, ou servir le dossier avec n'importe quel serveur statique (Laragon, `python -m http.server`…).

## Sources du contenu

Le contenu a été vérifié et recoupé (dernière vérification : octobre 2026). Tout ce qui n'a pas pu être confirmé a été retiré ou signalé « date non précisée ».

- Biographie : [Wikipédia](https://en.wikipedia.org/wiki/Na%C3%A2man), [Tendance Ouest](https://www.tendanceouest.com/actualite-426352-dieppe-la-ville-va-rendre-hommage-a-naaman-l-enfant-du-pays)
- Discographie : Wikipédia, [AllMusic](https://www.allmusic.com/album/beyond-mw0003119287/corrections), [Reggae.be](https://www.reggae.be/en/magazine/archive/2015-12-22-naaman-rays-of-resistance-soulbeats-records-big-sc/), Amazon Music
- Évènements : [Surf Report](https://www.surf-report.com/news/factories/reggae-sun-ska-festival-21eme-edition-201186513.html), [Paris Bouge](https://www.parisbouge.com/events/232536)
- Actualité : [Charts in France](https://www.chartsinfrance.net/Naaman/news-131536.html)

Points encore à confirmer : titres des morceaux d'*Deep Rockers, Back a Yard* et de *Beyond*, dates précises des lives (La Cigale, Dub Inc, La Bellevilloise, Rototom).

## Crédits et droits

Projet pédagogique sans but commercial. Naâman, ses œuvres, les pochettes et les photos appartiennent à leurs ayants droit respectifs (photos : Mikael Thuillier, Faya Burn Prod…). Vidéos et musique intégrées depuis YouTube et Spotify.

Réalisé par **Flavie Michel**.
