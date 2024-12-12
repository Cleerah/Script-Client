//exo5
console.log("Exo 05");

const nombreMystere = Math.floor(Math.random() * 20) + 1;
let compteur2 = 0;
let proposition;

while (proposition !== nombreMystere) {
  proposition = Number(prompt("Devinez le nombre mystère entre 1 et 20 :"));
  if (proposition > nombreMystere) {
    alert("Le nombre mystère est plus petit !");
  } else if (proposition < nombreMystere) {
    alert("Le nombre mystère est plus grand !");
  }
  compteur2++;
}

console.log(
  `Félicitations, vous avez découvert le nombre mystère : ${nombreMystere} en ${compteur2} tentatives.`
);
