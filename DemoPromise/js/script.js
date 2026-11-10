// Méthodes pour la démo
function prepareApero() {
    console.log('Apero - Debut');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Apero - Fin !');
            resolve();

        }, 1_000);
    })
}

function prepareEntrée() {
    console.log('Entrée - Debut');
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Entrée - Fin !');
            resolve();

        }, 2_000);
    })
}

function preparePlat_Legume() {
    console.log('Plat_Legume - Debut');
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Plat_Legume - Fin !');
            resolve();

        }, 500);
    })
}

function preparePlat_Chauffe() {
    console.log('Plat_Chauffe - Debut');
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Plat_Chauffe - Fin !');
            resolve();

        }, 5_000);
    })
}

function preparePlat_Cuisson() {
    console.log('Plat_Cuisson - Debut');
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if(Math.random() > 0.3) {
                console.log('Plat_Cuisson - Fin !');
                resolve();
            }
            else {
                reject(new Error('Plat_Cuisson - Cramé !'))
            }

        }, 7_500);
    })
}

function prepareCafé() {
    console.log('Café - Debut');
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Café - Fin !');
            resolve();

        }, 10_000);
    })
}

function prepareDessert() {
    console.log('Dessert - Debut');
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Dessert - Fin !');
            resolve();

        }, 3_000);
    })
}

// Chainage avec les méthodes "then", "catch"
// → Chaque appel s'attent !
/*
prepareApero()
    .then(() => prepareCafé()) 
    .then(() => prepareEntrée())
    .then(() => preparePlat_Legume()) 
    .then(() => preparePlat_Chauffe()) 
    .then(() => preparePlat_Cuisson()) 
    .catch((err) => console.log('Commande au Lunch garden'))
    .then(() => prepareDessert());
*/

// Utilisation en parallèle
/*
prepareApero()
    .then(() => {
        const promiseCafé = prepareCafé()
        const promisePlat = preparePlat_Legume()
            .then(() => preparePlat_Chauffe()) 
            .then(() => preparePlat_Cuisson())
            .catch((err) => console.log('Commande au BK'));
        
        return Promise.all([prepareEntrée(), promiseCafé, promisePlat])
    })
    .then(() => prepareDessert());
¨*/

// Utilisation en parallèle avec async/await
async function preparePlat() {
    try {
        await preparePlat_Legume();
        await preparePlat_Chauffe();
        await preparePlat_Cuisson();
    }
    catch {
        console.log('Allons à la pizza hut !');
    }
}

async function demoAsync() {
    await prepareApero();

    const promiseCafé = prepareCafé()
    const promisePlat = preparePlat();
    await Promise.all([prepareEntrée(), promiseCafé, promisePlat])
    await prepareDessert();
}
demoAsync();