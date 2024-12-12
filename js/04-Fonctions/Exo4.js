//exo 4
console.log("Exo 4");
function afficherTirageDuLotto2(quantiteDeNombres) {
  let resultatDuTirage = [];

  for (let i = 0; i < quantiteDeNombres; i++) {
    let tirage = Math.floor(Math.random() * 49) + 1;
    resultatDuTirage.push(tirage);
  }
  console.log(resultatDuTirage);
}

afficherTirageDuLotto2(10);
