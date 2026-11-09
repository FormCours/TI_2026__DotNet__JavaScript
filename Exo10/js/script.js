// Écrivez une fonction multiplier(a, b) avec une valeur de 1 par défaut pour b.
// Testez-la avec deux arguments, puis avec un seul.

function multiplier(a, b = 1) {
    let result = a * b;
    return result;
}

console.log(multiplier(12, 12));
console.log(multiplier(12));
// Écrivez une fonction somme(...nombres) utilisant l'opérateur rest pour additionner un nombre indéfini d'arguments.
function somme(...b) {
    let result = 0
    for (const a of b) {
        result += a
    }
    return result
}
console.log(somme(1, 3, 4, 5))
// Réécrivez multiplier en fonction fléchée avec retour implicite.
const multiplierBySono = (x, y = 1) => x * y

console.log(multiplierBySono(12, 12))
console.log(multiplierBySono(12))

// Bonus : Écrivez une fonction récursive factorielle(n) qui calcule la factorielle d'un nombre entier positif (rappel : factorielle(5) = 5 × 4 × 3 × 2 × 1 = 120).

//? - Version de base (non récursive)
function factorielle_v1(n) {
    if (n < 0) {
        throw new RangeError('Nope !');
    }

    let result = 1;
    while (n > 1) {
        result = result * n;
        n = n - 1;
    }
    return result;
}

//? - Version récursive ♥
function factorielle(n = 1) {
    if (n < 0) {
        throw new RangeError('Nope !');
    }

    if (n <= 1) {
        return 1;
    }
    return n * factorielle(n - 1);
}
console.info(factorielle(5))

//? - Version lambda et recursive (pour se prend la tête 🤯)
const factorielle_lambda = (n = 1) => (n <= 1) ? 1 : n * factorielle_lambda(n - 1);

