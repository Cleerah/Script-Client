// Importation de tous les exports du fichier "donnees.js" sous l'alias "mots".
// Cela permet d'accéder à toutes les fonctions ou variables exportées dans "donnees.js" via l'objet "mots".
import * as mots from "./donnees.js";

// Importation d'un export par défaut du fichier "selectionAleatoireDansTableau.js", renommé localement en "choisirMotAleatoire".
import { default as choisirMotAleatoire } from "./selectionAleatoireDansTableau.js";

/**
 * Génère un super-héros aléatoire en combinant un adjectif, un animal et un pouvoir.
 * 
 * @returns {string} - Le nom complet du super-héros sous la forme "Adjectif Animal avec Pouvoir".
 */
export function genererSuperHeros() 
{
    // Récupère les listes d'adjectifs, d'animaux et de pouvoirs en appelant les fonctions appropriées.
    const adjectifs = mots.obtenirAdjectifs();
    const animaux = mots.obtenirAnimaux();
    const pouvoirs = mots.obtenirPouvoirs();

    // Sélectionne un élément aléatoire de chaque tableau en utilisant la fonction de sélection aléatoire.
    const adjectif = choisirMotAleatoire(adjectifs);
    const animal = choisirMotAleatoire(animaux);
    const pouvoir = choisirMotAleatoire(pouvoirs);

    // Retourne une chaîne de caractères formatée qui représente le super-héros généré.
    return `${adjectif} ${animal} avec ${pouvoir}`;
}