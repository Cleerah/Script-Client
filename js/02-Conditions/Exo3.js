//exo3
console.log("Exo 03");
const etatEbriete = prompt(
  "Quel était l'état d'ébriété du ministre (0 = sobre, 1 = joyeux, 2 = ivre) : "
);
if (etatEbriete == 0) {
  console.log("Le ministre est sobre et responsable !");
} else if (etatEbriete == 1) {
  console.log("Le ministre était joyeux");
} else if (etatEbriete == 2) {
  console.log("Le ministre était ivre");
} else {
  console.log("Erreur ! État d'ébriété inconnu !");
}
