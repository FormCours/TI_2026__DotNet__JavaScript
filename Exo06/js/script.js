'use strict';

const DOM = {
    generateBtn : document.getElementById("generate-btn"),
    colorBtn : document.getElementById("color-btn"),
    eraseBtn : document.getElementById("erase-btn"),
    caseGrid : document.getElementById("grille"),
};

DOM.generateBtn.addEventListener("click", () => {
    for(let i = 1; i <= 25; i++){
        const elem = document.createElement('div');
        elem.className = "case";
        elem.textContent = i;
        DOM.caseGrid.append(elem);
    }
});

DOM.colorBtn.addEventListener("click", () => {
    //! Recherche de éléments de la grille
    // - Récuperation de tout les éléments enfant
    // const cases = DOM.caseGrid.children;

    // - Recherche via le nom d'une classe
    // const cases = DOM.caseGrid.getElementsByClassName("case")

    // - Recherche via un selection CSS
    const cases = DOM.caseGrid.querySelectorAll(".case");
    console.log("cases", cases)

    //! Traitement
    let i = 0;
    while(cases[i] !== undefined){
        if(cases[i].textContent % 3 == 0){
            cases[i].classList.add("rouge");
        }
        else {
            cases[i].classList.add("vert");
        }
        i++;
    }
});

DOM.eraseBtn.addEventListener("click", () => {
    //! Suppression des éléments un par un
    while(DOM.caseGrid.firstElementChild){
        DOM.caseGrid.firstElementChild.remove()
    }

    //! Remplace le contenu HTML (Bourin strat)
    // DOM.caseGrid.innerHTML = '';
})

