// Lecteur Spotify chargé au clic : aucun cookie tiers tant que le visiteur ne le demande pas
const facade = document.querySelector(".spotify-facade");

if (facade) {
    facade.querySelector("button").addEventListener("click", () => {
        const lecteur = document.createElement("iframe");
        lecteur.className = "spotify";
        lecteur.title = "Écouter Naâman sur Spotify";
        lecteur.src = facade.dataset.src;
        lecteur.height = 152;
        lecteur.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
        facade.replaceWith(lecteur);
        lecteur.focus();
    });
}
