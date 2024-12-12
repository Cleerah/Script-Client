//exo 3
console.log("Exo 3");
function afficherTirageDuLotto() {
  let resultatDuTirage = [];

  // Générer et stocker 7 nombres aléatoires
  for (let i = 0; i < 7; i++) {
    let tirage = Math.floor(Math.random() * 49) + 1;
    resultatDuTirage.push(tirage);
  }
  console.log(resultatDuTirage);
}

// Appeler la fonction "afficherTirageDuLotto()".
afficherTirageDuLotto();

