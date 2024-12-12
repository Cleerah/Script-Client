//exo10
console.log("Exo 10");
const matrice = [
  ["-1-", "-2-", "-3-"],
  ["-4-", "-5-", "-6-"],
  ["-7-", "-8-", "-9-"],
];
let resultat = "";
for (let i = 0; i < matrice.length; i++) {
  for (let j = 0; j < matrice[i].length; j++) {
    resultat += matrice[i][j] + " ";
  }
  resultat += "\n";
}
console.log(resultat);
