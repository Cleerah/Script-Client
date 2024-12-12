//exo 6
console.log("Exo 6");
function afficherTirageDuLotto4(nbTirages, valeurMin, valeurMax) {
  let resultatDuTirage = [];

  // Boucle qui effectue les tirages
  for (let i = 0; i < nbTirages; i++) {
    let tirage; // Variable pour stocker un tirage aléatoire

    // Générer un tirage unique
    do {
      // On génère un nombre aléatoire entre valeurMin et valeurMax
      tirage =
        Math.floor(Math.random() * (valeurMax - valeurMin + 1)) + valeurMin;
    } while (resultatDuTirage.includes(tirage)); // Si le tirage est déjà dans le tableau, on recommence

    // Une fois qu'on a un tirage unique, on l'ajoute au tableau
    resultatDuTirage.push(tirage);
  }

  console.log(resultatDuTirage);
}
afficherTirageDuLotto4(10, 1, 20);
