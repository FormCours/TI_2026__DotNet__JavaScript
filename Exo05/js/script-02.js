'use strict';

//! Récuperation des éléments du DOM
const DOM = {
    inputFruit: document.getElementById('input-fruit'),
    btnAddFruit: document.getElementById('btn-add-fruit'),
    listFruit: document.getElementById('ma-liste'),
    btnRemoveAll: document.getElementById('btn-remove-all')
};

//! 1) Ajouter un fruit
DOM.btnAddFruit.addEventListener('click', function() {
    // Lecture de la valeur de l'input
    const fruit = DOM.inputFruit.value.trim();

    // Vider l'input
    DOM.inputFruit.value = '';
    
    // Traitement
    if(fruit === '') {
        // Champ vide → Erreur !
        alert('Un nom de fruit est necessaire !');
    }
    else {
        // Créer l'élément "li"
        const fruitElem = document.createElement('li');
        fruitElem.textContent = fruit;

        // Ajout dans la page Web
        DOM.listFruit.append(fruitElem);

        //! Bonus - Start) Ajout d'un bouton pour supprimer l'élément
        const btnRemove = document.createElement('button');
        btnRemove.textContent = "Retirer";
        btnRemove.addEventListener('click', function() {
            fruitElem.remove();
        })

        fruitElem.append(btnRemove);
    }
});

//! 2) Supprimer la liste des fruits
DOM.btnRemoveAll.addEventListener('click', function() {
    DOM.listFruit.innerHTML = "";
});