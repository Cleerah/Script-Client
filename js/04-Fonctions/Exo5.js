//exo 5
console.log("Exo 5");
function afficherTirageDuLotto3(nbTirages, valeurMin, valeurMax) {
  let resultatDuTirage = [];

  for (let i = 0; i < nbTirages; i++) {
    let tirage =
      Math.floor(Math.random() * (valeurMax - valeurMin + 1)) + valeurMin;
    resultatDuTirage.push(tirage);
  }

  console.log(resultatDuTirage);
}
afficherTirageDuLotto3(10, 1, 20);
