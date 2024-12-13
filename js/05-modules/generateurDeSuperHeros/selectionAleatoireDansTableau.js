/**
 * Retourne un élément aléatoire d'un tableau donné.
 * @param {Array} tableau - Le tableau dont un élément sera sélectionné aléatoirement.
 * @returns {*} - Un élément aléatoire du tableau.
 */
function selectionnerElementAleatoireDansTableau(tableau) {
  const indexAleatoire = Math.floor(Math.random() * tableau.length);
  return tableau[indexAleatoire];
}
