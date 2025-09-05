const cards = document.querySelectorAll('.carte-item');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Fermer toutes les cartes sauf celle cliquée
    cards.forEach(c => {
      if (c !== card) c.classList.remove('open');
    });

    // Alterner l'ouverture de la carte cliquée
    card.classList.toggle('open');
  });
});
