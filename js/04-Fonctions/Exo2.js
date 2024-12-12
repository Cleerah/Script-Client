//exo 2
console.log("Exo 2");
function jouerAuNombreMystere(nombreMin, nombreMax) {
  const nombreMystere = Math.floor(Math.random() * nombreMax) + 1;
  let reponse;
  let essais = 0;

  while (reponse !== nombreMystere) {
    reponse = Number(
      prompt(
        `Devinez le nombre exact entre ${nombreMin} et ${nombreMax} (ou entrez 0 pour quitter) :`
      )
    );

    if (reponse === 0) {
      alert("Merci d'avoir joué. À bientôt !");
      break; // Quitte la boucle
    }

    if (isNaN(reponse) || reponse < nombreMin || reponse > nombreMax) {
      alert(
        `Veuillez entrer un nombre valide entre ${nombreMin} et ${nombreMax}.`
      );
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

jouerAuNombreMystere(10, 30);
