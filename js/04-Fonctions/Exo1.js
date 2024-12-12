//exo 1
console.log("Exo 1");
function jouerAuNombreMystere() {
  const nombreMystere = Math.floor(Math.random() * 10) + 1;
  let reponse;
  let essais = 0;

  while (reponse !== nombreMystere) {
    reponse = Number(
      prompt(
        "Devinez le nombre exact entre 1 et 10 (ou entrez 0 pour quitter) :"
      )
    );

    if (reponse === 0) {
      alert("Merci d'avoir joué. À bientôt !");
      break; // Quitte la boucle
    }

    if (isNaN(reponse) || reponse < 1 || reponse > 10) {
      alert("Veuillez entrer un nombre valide entre 1 et 10.");
      continue; // Retourne au début de la boucle
    }

    essais++;
    if (reponse < nombreMystere) {
      alert("C'est plus !");
    } else if (reponse > nombreMystere) {
      alert("C'est moins !");
    }
  }

  if (reponse === nombreMystere) {
    alert(
      `Bravo ! Tu as trouvé le nombre mystère ${nombreMystere} en ${essais} essais.`
    );
  }
}

// Appeler la fonction permettant de lancer la partie.
jouerAuNombreMystere();
