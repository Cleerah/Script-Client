/**
 * Sélectionne un élément aléatoire dans un tableau donné.
 * 
 * @param {Array} tableau - Le tableau dans lequel un élément aléatoire doit être sélectionné.
 * @returns {*} - Un élément aléatoire du tableau.
 */
export default function selectionnerElementAleatoireDansTableau(tableau)
{
    // "Math.random()" génère un nombre flottant entre 0 et 1 (exclus). 
    // Le nombre généré aléatoirement multiplié par "tableau.length" donne donc un nombre compris entre 0 et la longueur du tableau (exclus).
    const indexAleatoire = Math.floor(Math.random() * tableau.length);
    
    // Retourne l'élément du tableau à l'index généré.
    return tableau[indexAleatoire];
}