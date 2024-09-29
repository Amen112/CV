// Exemple : Bouton "Retour en haut"
document.addEventListener("scroll", function() {
    const button = document.getElementById("backToTop");
    if (window.pageYOffset > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

function backToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
