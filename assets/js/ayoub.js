$(document).ready(function () {
    $(".single-image-carousel").owlCarousel({
      items: 1, // Une seule image visible
      loop: true, // Boucle infinie
      nav: true, // Activer les boutons de navigation
      dots: false, // Désactiver les puces
      navText: ["&#8249;", "&#8250;"], // Utilisation de symboles "‹" et "›"
    });
  });
  