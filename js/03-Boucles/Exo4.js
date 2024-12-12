//exo4
console.log("Exo 04");

let message = 0;
while (message % 2 === 0) {
  message = prompt("Entrer un chiffre impaire afind e sortir de la boucle");
  if (message % 2 !== 0) {
    console.log("extraction de la boucle réussi");
  }
}
