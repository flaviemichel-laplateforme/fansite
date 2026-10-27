// Ouverture / fermeture du menu burger (écrans <= 800px)
const bouton = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");

bouton.addEventListener("click", () => {
    const ouvert = menu.classList.toggle("open");
    bouton.setAttribute("aria-expanded", ouvert);
    bouton.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
});
