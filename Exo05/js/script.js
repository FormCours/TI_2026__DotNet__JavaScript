'use strict';

//! Récuperation des éléments du DOM
// Object qui regroupe les éléments du DOM
const DOM = {
    title: document.getElementById('main-title'),
    paragraph: document.querySelector('p.thomas'),
    btn01: document.getElementById('btn-01'),
    btn02: document.querySelector('#btn-02'),
    listElement: document.getElementById('list-element'),
}

// 1) Récupérez le titre à l'aide de son id et le paragraphe à l'aide d'un sélecteur CSS
//    Modifiez leur contenu textuel depuis le JavaScript.
DOM.paragraph.textContent = "Ceci est un texte ajouter depuis le JavaScript !";
DOM.title.textContent += " ☕";

// 2) Au clic sur le premier bouton, ajoutez une classe CSS au paragraphe (ex : une couleur) et affichez dans la console le nom de la classe active.
DOM.btn01.addEventListener('click', function() {

    //? - Ajouter la classe
    DOM.paragraph.classList.add('shirley');

    //? - Voir les classes active du paragraphe
    console.log(DOM.paragraph.className);
});

// 3) Au clic sur le second bouton, ajoutez une autre classe CSS au paragraphe (ex : une font). Si la classe est déjà présente, elle doit être retirée.
DOM.btn02.addEventListener('click', function() {

    //? - Ajouter ou retirer la classe
    DOM.paragraph.classList.toggle('mathieu');

    //? - Voir les classes active du paragraphe
    console.log(DOM.paragraph.className);
})

// Bonus) Au clic sur un <li>, modifiez son texte pour indiquer qu'il a été sélectionné, et retirez cette indication si on clique de nouveau dessus.
console.log(DOM.listElement.children);

for(const itemElement of DOM.listElement.children) {
    console.log(itemElement);
    
    itemElement.addEventListener('click', function() {
        itemElement.classList.toggle('martin')
    })
}
