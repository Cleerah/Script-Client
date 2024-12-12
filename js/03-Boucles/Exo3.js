//exo3
console.log("Exo 03");
let input;
while (isNaN(input)) {
  input = prompt("entrer un chiffre");
  if (!isNaN(input)) {
    console.log("Vous etes sortie de la boucle");
  }
}
