'use strict';

/* Demandez un prix à l'utilisateur via prompt. Convertissez-le en réel, affichez-le dans la console, puis formatez-le pour un affichage en euros. */

let prix = prompt("Met de l'argent stp");
console.log(prix);

let prixEuro=parseFloat(prix);
console.log(`${prixEuro}€`);

console.log(prixEuro.toLocaleString("fr-be",{
    style:"currency",
    currency:"EUR"
}));

/* ========================================= */
/* Demandez le prénom et le nom de famille via deux prompt. Concaténez-les en une seule chaîne en utilisant une des méthodes vues au cours et affichez le résultat. */

const firstName = prompt("Quel est votre prénom ?");
const lastName = prompt("Quel est votre nom de famille ?");

alert(`Vous vous appelez ${firstName} ${lastName}.`)

/*============================================= */
/* Créez un objet personne avec nom, prénom, âge et ville.
    ○ Ajoutez une propriété email dynamiquement.
    ○ Affichez chaque propriété dans la console.*/

const personne = {
    nom: "Ketchum",
    prenom : "Sacha",
    age: 10+30,
    ville: "Bourg-Palette",
};
console.log(personne);

personne.email = "Sacha.K@pokemon.be";
console.log(personne);
