// Créez une page HTML avec une horloge numérique simple :
// ● Affichez l'heure courante (heures, minutes, secondes) dans un <p id="horloge">.
// ● Utilisez setInterval pour mettre l'affichage à jour chaque seconde.
// ● Formatez l'affichage sous la forme HH:MM:SS (avec un zéro devant si nécessaire, ex : 08:05:03).
// ● Ajoutez un bouton "Pause" qui suspend l'horloge avec clearInterval, et un bouton
// "Reprendre" qui la relance.

function showNow()
{
    const now = new Date();
    console.log(now.getHours(),now.getMinutes(),now.getSeconds());
    document.getElementById("horloge").textContent = now.toLocaleTimeString("fr-BE");
}
showNow();

let intervalNow = setInterval(showNow,1000); 
let isRunning = true;

const pause = document.getElementById('pause')
pause.addEventListener("click", () => {
    clearInterval(intervalNow);
    isRunning = false;
})

const relance = document.getElementById('relance')
relance.addEventListener("click", () => {
    if(!isRunning) {
        isRunning = true;
        intervalNow = setInterval(showNow,1000);
    }
})