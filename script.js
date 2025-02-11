// Gérer l'ouverture de chaque modale individuellement
document.getElementById("openModalBtn1").onclick = function() {
    document.getElementById("myModal1").style.display = "block";
}

document.getElementById("openModalBtn2").onclick = function() {
    document.getElementById("myModal2").style.display = "block";
}

document.getElementById("openModalBtn3").onclick = function() {
    document.getElementById("myModal3").style.display = "block";
}
// Gérer la fermeture de chaque modale individuellement
document.querySelectorAll(".modal").forEach(modal => {
    modal.querySelector(".close").onclick = function() {
        modal.style.display = "none";
    }

    // Fermer la modale en cliquant en dehors du contenu
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

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