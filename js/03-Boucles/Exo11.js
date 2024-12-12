console.log("Exo 11");
const matriceHauteurLargeur = 3;
let resultat2 = "";

// Boucle : Pratiquer 3 itérations pour créer dynamiquement les rangées :
for (let r = 0; r < matriceHauteurLargeur; r++) {
  // Boucle : Pratiquer 3 itérations pour créer dynamiquement les colonnes :
  for (let c = 0; c < matriceHauteurLargeur; c++) {
    // Calculer le numéro de la case actuelle.
    const caseNumero = matriceHauteurLargeur * r + c + 1;
    // Mettre en forme le numéro de case et l'ajouter en fin de chaîne de caractère de la variable "resultat".
    resultat2 += " -" + caseNumero + "- ";
  }

  // Ajouter un retour à la ligne en fin de chaque rangée.
  resultat2 += "\n";
}

// Afficher la matrice créée dynamiquement en chaînes de caractères.
console.log(resultat2);

/*
    Affiche : 
    -1- -2- -3-
    -4- -5- -6-
    -7- -8- -9-
*/
