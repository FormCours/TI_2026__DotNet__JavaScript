'use strict';

const tab = [5, 12, 3, 8, 1, 2, 7];

// Ajoutez la valeur 15 à la fin et la valeur 9 au début.
tab.push(15);
tab.unshift(9);
console.log('Tab', tab);

// Triez le tableau par ordre croissant, puis inversez-le.
tab.sort((a, b) => a - b);
tab.reverse();
console.log('Tab', tab);

// Retirez le dernier élément et le premier élément.
tab.pop();
tab.shift();
console.log('Tab', tab);

// Vérifiez si le tableau contient la valeur 8
const test = tab.some(e => e === 8);
console.log(`Le tableau contien la valeur 8 : ${(test) ? "Oui" : "Non"}`)

// Créez une copie du tableau qui contiendra le double des nombres du tableau original inférieurs à 10.
const tab2 = tab.filter(e => e < 10).map(e => e * 2);
console.log('Tab2', tab2);


// Trouvez la position du premier nombre entre 5 et 10 dans les deux tableaux.
const idx1 = tab.findIndex(e => e >= 5 && e <= 10 );
const idx2 = tab2.findIndex(e => e >= 5 && e <= 10 );
console.log('Idx1', idx1);
console.log('Idx2', idx2);

// Affichez les tableaux en console avec « console.table() ».
console.table(tab);
console.table(tab2);