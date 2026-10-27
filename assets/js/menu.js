// Page courante signalée dans le menu principal
const pageCourante = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("#menu > li > a").forEach((lien) => {
    if (lien.getAttribute("href").replace("./", "") === pageCourante) {
        lien.setAttribute("aria-current", "page");
    }
});

// Ouverture / fermeture du menu burger (écrans <= 800px)
const bouton = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");

bouton.addEventListener("click", () => {
    const ouvert = menu.classList.toggle("open");
    bouton.setAttribute("aria-expanded", ouvert);
    bouton.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
});
