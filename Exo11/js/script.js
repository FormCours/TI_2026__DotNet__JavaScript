// Créez une page HTML avec une horloge numérique simple :
// ● Affichez l'heure courante (heures, minutes, secondes) dans un <p id="horloge">.
// ● Utilisez setInterval pour mettre l'affichage à jour chaque seconde.
// ● Formatez l'affichage sous la forme HH:MM:SS 
//   (avec un zéro devant si nécessaire, ex : 08:05:03).
// ● Ajoutez un bouton avec les comportements suivants :
//   ○ Si l’horloge fonctionne : "Pause" qui permet suspend l'horloge avec clearInterval.
//   ○ Si l’horloge est arrêté : "Reprendre" qui permet de la relancer.

function showNow()
{
    const now = new Date();
    console.log(now.getHours(),now.getMinutes(),now.getSeconds());
    document.getElementById("horloge").textContent = now.toLocaleTimeString("fr-BE");
}

let intervalNow = setInterval(showNow,1000); 
showNow();

const btnPause = document.getElementById('pause')
btnPause.addEventListener("click", () => {
    if(intervalNow !== null) {
        clearInterval(intervalNow);
        intervalNow = null;
        btnPause.textContent = "Reprendre"
    }
    else {
        intervalNow = setInterval(showNow,1000);
        btnPause.textContent = "Pause"
    }
});