// Écrivez une fonction « diviser(a, b) » qui lève une erreur si b vaut 0.
function diviser(a, b) {
    if (b === 0) {
        throw new RangeError("Pas zero S'IL TE PLAIT ╰（‵□′）╯");
    }

    return a / b;
}


// Appelez cette fonction dans un try...catch et affichez le message d'erreur. Ajoutez un finally qui affiche 'Opération terminée' dans tous les cas.
try {
    diviser(67, 0);
}
catch (e) {
    console.log(e.message);
}
finally {
    console.log("Opération terminée");
}


// Créez une fonction « convertirEnNombre(valeur) » qui lève une erreur si :
// - la valeur convertie est NaN → TypeError
// - la valeur est supérieure aux entiers « safe » du JS → RangeError
function convertirEnNombre(valeur) {
    let nb = parseFloat(valeur);

    if (Number.isNaN(nb)) {
        throw new TypeError("Conversion impossible");
    }

    if (Number.isInteger(nb) && !Number.isSafeInteger(nb)) {
        throw new RangeError("Valeur not safe");
    }

    return nb;
}


// Bonus : Utilisez la fonction « convertirEnNombre » dans un seul try...catch et traitez différemment un TypeError et un RangeError.
try {
    let demande = prompt("entrez une valeur: ");
    let result = convertirEnNombre(demande);

    alert(result);
}
catch (error) {
    if (error instanceof TypeError) {
        alert("On a dit un nombre boulet ");
    }
    else if (error instanceof RangeError) {
        alert("T'es nul, c'est pas dans les valeurs possibles");
    }
    else {
        alert("Ca marche pô (´。＿。｀)");
    }
    console.log(error.message ?? "Une erreur est survenu");
}