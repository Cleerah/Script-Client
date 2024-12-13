function genererSuperHeros() {
  // Récupérer les tableaux
  const adjectifs = obtenirAdjectifs();
  const animaux = obtenirAnimaux();
  const pouvoirs = obtenirPouvoirs();

  // Générer un super-héros
  const adjectifAleatoire = selectionnerElementAleatoireDansTableau(adjectifs);
  const animalAleatoire = selectionnerElementAleatoireDansTableau(animaux);
  const pouvoirAleatoire = selectionnerElementAleatoireDansTableau(pouvoirs);

  return `${adjectifAleatoire} ${animalAleatoire} avec ${pouvoirAleatoire}`;
}
