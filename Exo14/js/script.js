'use strict';

const form1 = document.getElementById("exo-form");
const result = document.getElementById("result");

form1.addEventListener("submit", (event) => {
    // Déactivation de l'event du formulaire
    event.preventDefault();

    // Efface les spans d'erreur
    resetFormError();

    // Récuperation des données du formulaire
    const data = {
        firstname : form1.firstname.value.trim(),
        age : form1.age.valueAsNumber,
        country : form1.country.value,
        condition : form1.condition.checked,
    }
    console.log(data);

    // Validation des données du formulaire
    let okay = true;
    if(data.firstname.length<2){
        form1.querySelector("#error-firstname").textContent = "Le nom doit faire minimum 2 caracteres.";
        okay = false;
    }
    if(data.age<18 || data.age>99){
        form1.querySelector("#error-age").textContent="l'age rentré est incorrect (entre 18 et 99)";
        okay = false;        
    }
    if(!data.condition){
        form1.querySelector("#error-condition").textContent= "veuillez accepter les conditions d'utilisation";
        okay = false;
    }

    if(okay){
        // Traitement des données
        showValidation(data);

        // Remet à zéro les données du formulaire
        form1.reset();
    }
});

function resetFormError(){
    form1.querySelectorAll("span.error").forEach(elem => {
        elem.textContent = ""
    })
}

function showValidation(data){
    result.textContent = `Merci ${data.firstname} de ${data.country} d'avoir rempli le formulaire !`;
}