// La fonction anonyme définie ici est immédiatement invoquée grâce aux parenthèses () à la fin.
// Cela permet d'exécuter ce bloc de code immédiatement sans avoir besoin de l'appeler ailleurs.
// C'est une bonne pratique pour encapsuler le code et éviter d'exposer des variables
// ou des fonctions dans l'espace global, réduisant les risques de conflits avec d'autres scripts.
(function () {
  // Génère un nom de super-héros en appelant la fonction genererSuperHeros.
  const superHeros = genererSuperHeros();

  // Affiche dans la console un message informant l'utilisateur de son super-héros généré.
  console.log(`Vous êtes un ${superHeros}!`); // Pourrait afficher : Vous êtes un loyal cochon avec le pouvoir de créer des tornades!
})();
