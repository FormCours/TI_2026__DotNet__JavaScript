const DOM = {
    pToday: document.getElementById("e1-1"),
    pBirthdate: document.getElementById("e1-2"),
    pAge: document.getElementById("e2"),
    pNextBirthdate: document.getElementById("e3"),
    pBonus : document.getElementById("e4"),
};


// Déclarez dans le JavaScript la date du jour et une date de naissance.
const today = new Date();

const birthdate = new Date("1993-09-12");  // Piege → Format ISO ou US
//* const birthdate = new Date(1993, 8, 12); // Piege → L'index du mois !!!

console.log(today);
console.log(birthdate);

DOM.pToday.textContent = today.toDateString();
DOM.pBirthdate.textContent = birthdate.toDateString();


// Calculez et affichez l'âge en années dans la page.
let age = today.getFullYear() - birthdate.getFullYear();
if ((today.getMonth() < birthdate.getMonth())
    || ((today.getMonth() === birthdate.getMonth()) && (today.getDate() < birthdate.getDate()))) {
    age = age - 1
};

console.log(age);
DOM.pAge.textContent = age;


// Affichez la date du prochain anniversaire dans un format lisible où le mois apparaît en toutes lettres (ex : 25 juin 2025).
const nextBirthdate = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
if (today >= nextBirthdate)
{
    nextBirthdate.setFullYear(nextBirthdate.getFullYear() + 1);
}

DOM.pNextBirthdate.textContent = nextBirthdate.toLocaleDateString("FR-be", {
    month: "long",
    day: "numeric",
    year: "numeric"
})


// Bonus : Calculez et affichez le nombre de jours restants avant ce prochain anniversaire.
const nbDay = Math.ceil((nextBirthdate - today)/(1000*60*60*24));
console.log(nbDay);

DOM.pBonus.textContent = nbDay;