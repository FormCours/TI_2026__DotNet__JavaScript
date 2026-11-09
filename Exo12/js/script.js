//! Récuperation des éléments du DOM
const DOM = {
    grid: document.getElementById('game-grid'),
    msg: document.getElementById('game-msg'),
};

//! Constantes
const gameSymbole = ['😏', '🩲', '🐒', '💅', '⚓', '🦠', '💃', '🧙‍♂️'];
const mysterySymbole = '❓';
const nbCard = 2;
const waitTime = 750;

//! Génération de la grille de jeu
const gameGrid = [];

/** Génération d'une nouvelle grille de jeu */
function generateGameGrid() {

    // Vide la grille précédente
    clearCollection(gameGrid);

    // Génération de la nouvelle grille
    for (let i = 0; i < nbCard; i++) {
        for (const symbole of gameSymbole) {
            gameGrid.push({ symbole, isReveal: false, card: createCard() });
        }
    }

    // Mélange de la grille
    gameGrid.sort(() => Math.random() - 0.5);
}

/** Affiche dans le DOM la grille de jeu */
function showGameGrid() {
    // Efface les cartes précédentes
    DOM.grid.innerHTML = '';

    for (const elem of gameGrid) {
        // Ajout de la carte
        DOM.grid.append(elem.card);

        // Définition des events de la carte
        elem.card.addEventListener('click', (event) => revealCard(elem));
    }
}

//! Helpers
/** Génération d'un élément du DOM pour symboliser une carte */
function createCard() {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = mysterySymbole;
    return card;
}

/** Vide le contenu d'un tableau */
function clearCollection(tab) {
    tab.splice(0, tab.length);
}

//! Game systeme
const selectedElems = [];
let lock = false;
let count = 0;

/** Traitement de la carte choisi et lancement de la validation des cartes */
function revealCard(elem) {
    if (elem.isReveal || lock || selectedElems.length >= nbCard) {
        return;
    }
    selectedElems.push(elem);
    showElem(elem);

    // Si plus d'une carte selectionné, elles sont vérrifié
    if (selectedElems.length > 1) {
        if (selectedIsValid()) {
            // Si toutes les paires sont trouvé, le jeu continue
            if(selectedElems.length === nbCard) {
                clearCollection(selectedElems);
                checkVictory();
                count++;
            }
        }
        else {
            // En cas d'erreur, on masque les cartes
            lock = true;
            count++;
            setTimeout(hideSelectedElems, waitTime);
        }
    }
}

/** Verifie que toutes les cartes affichées ont le même symbole */
function selectedIsValid() {
    let isValid = true;
    const symbole = selectedElems[0].symbole;

    for (let i = 1; isValid && i < selectedElems.length; i++) {
        if (symbole != selectedElems[i].symbole) {
            isValid = false;
        }
    }

    return isValid;
}

/** Affiche un texte de victoire quand le jeu est terminé */
function checkVictory() {
    if(gameGrid.every(elem => elem.isReveal)) {
        DOM.msg.textContent = `VICTIORE en ${count} tentatives !`
        lock = true;
    }
}

/** Masque les cartes selectionnées */
function hideSelectedElems() {
    while (selectedElems.length > 0) {
        selectedElems[0].card.textContent = mysterySymbole;
        selectedElems[0].card.classList.remove('reveal');
        selectedElems[0].isReveal = false;
        selectedElems.shift();
    }
    lock = false;
}

/** Affiche la carte */
function showElem(elem) {
    elem.card.textContent = elem.symbole;
    elem.card.classList.add('reveal');
    elem.isReveal = true;
}

//! Initialisation du jeu
/** Méthode pour lancer une partie de Memory */
function startGame() {
    // Reset grid
    generateGameGrid();
    showGameGrid();

    // Reset game
    clearCollection(selectedElems);
    lock = false;
    count = 0;
}
startGame();