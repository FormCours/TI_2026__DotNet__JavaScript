// Partez du tableau ['Balthazar', 'Della', 'Donald', 'Riri', 'Zaza']
// Utilisez la boucle « .forEach() » pour créer dynamiquement un <li> par personnage
// dans une liste <ul> de la page, en affichant sa position et son nom.

let personnages = ['Balthazar', 'Della', 'Donald', 'Riri', 'Zaza'];
const listeTotale = document.getElementById('container-01');

personnages.forEach((nom, position) => {

    const listeElement = document.createElement('li');
    listeTotale.append(listeElement);

    listeElement.textContent = position + " : " + nom;
    // listeElement.append(position, " : ", nom)

    // ↓ a pas faire ! aux balises dans les données
    // listeElement.innerHTML= position + " : " + nom; 
});

//--------------------------------------------------------

// Avec la boucle « for … in », parcourez l'objet suivant :
// { lastname: 'Duck', firstname: 'Balthazar', city: 'Canardville' }
// Pour chaque paire clef/valeur, créez dynamiquement un <p> dans la page.
// Pour chaque <p>, contenir clef => valeur

let Balthazar = { lastname: 'Duck', firstname: 'Balthazar', city: 'Canardville' };
const objBalthazar = document.getElementById('container-02');

for (const key in Balthazar) {
    if (!Object.hasOwn(Balthazar, key)) continue;

    let paragraphe = document.createElement('p');
    paragraphe.append(key, " => ", Balthazar[key]);
    objBalthazar.append(paragraphe);
}

//--------------------------------------------------------

//Expliquez pourquoi « for … in » est déconseillé pour parcourir les tableaux.
// - Bah cé poh bien
// - Ne garantit pas l'ordre de parcours, atteint des propriétés dérivées et des indexs.

//--------------------------------------------------------

// Bonus : Créez une collection d'objets avec des produits, chaque produit possède
// un nom, une description (optionnelle) et un prix.
// Ensuite, affichez les produits dans une liste <ul> en utilisant la boucle « for…of ».

const collection = [
    { name: 'Plaquette de ram', description: 'De l\'or en barre, littéralement', price: Infinity },
    { name: 'Plaquette dentaire', description: 'Des plaquettes qu\'on met sur les dents afin qu\'elles poussent correctement', price: 20 },
    { name: 'Fanta', description: 'Le cryptoFantasio974', price: -1 }
];

const listeCollection = document.getElementById('container-03');

for (const element of collection) {
    let details = document.createElement('li');
    let miseALaLigne = document.createElement('br');
    const prixEnEuro = element.price.toLocaleString(undefined, {
        style: 'currency',
        currency: 'EUR'
    }); 

    details.append(element.name, " ", prixEnEuro, miseALaLigne, element.description);
    listeCollection.append(details);
}

