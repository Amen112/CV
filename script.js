// Obtenir les éléments
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

// Ouvrir la modale au clic du bouton
btn.onclick = function() {
    modal.style.display = "block";
}

// Fermer la modale au clic sur le 'X'
span.onclick = function() {
    modal.style.display = "none";
}

// Fermer la modale en cliquant en dehors du contenu de la modale
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Bouton "Retour en haut"
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