// Formulaire de démonstration : rien n'est envoyé, on confirme simplement la saisie
const formulaire = document.querySelector("#contact form");
const confirmation = document.getElementById("confirmation");

formulaire.addEventListener("submit", (event) => {
    event.preventDefault();
    const prenom = formulaire.elements.Prenom.value.trim();
    confirmation.textContent = `Merci ${prenom} ! (Démo : aucun message n'a été envoyé.)`;
    formulaire.reset();
});
