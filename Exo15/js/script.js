'use strict';

// Créez une fonction concentration(ms) qui retourne une promesse et simule le temps de préparation du joueur. Utilisez-la pour afficher le message « Le joueur est prêt ! » une fois le délai écoulé.
function concentration(ms) {
    return new Promise(resolve => {

        // Traitement
        setTimeout(() => {
            resolve('Le joueur est prêt !')
        }, ms);
    });
};

// Créez une fonction attaque() qui retourne une promesse dont le résultat est incertain : elle peut réussir ou échouer aléatoirement. Un message doit être affiché selon l'issue.
function attaque() {
    return new Promise((resolve, reject) => {

        // Traitement
        setTimeout(() => {
            if(Math.random() > 0.3) {
                resolve('Attaque réussie !');
            }
            else {
                reject(new Error('Attaque raté !'));
            }
        }, 100);
    });
}

// Créez une fonction async jouerTour(joueur) qui orchestre un tour complet : le joueur se concentre pendant un temps aléatoire entre 2 et 5 secondes, puis lance son attaque. 
async function jouerTour(joueur) {

    const wait = (Math.random() * 3_000) + 2_000;

    console.log(`Le joueur ${joueur} se concentre...`);
    const msgConcentration = await concentration(wait);
    console.log(msgConcentration);
    

    console.log(`Le joueur ${joueur} va attaqué !`);
    try {
        const msgAttaque = await attaque();
        console.log(msgAttaque);
    }
    catch (error) {
        console.log(error.message);
    }
}