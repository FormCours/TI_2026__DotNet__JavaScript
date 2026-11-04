'use strict';

let note = parseFloat(prompt("NOTE ET QUE CA SAUTE!"));

if (isNaN(note) || note < 0 || note > 20) {
    note = null;
}

let noteString;
switch (true) {
    case note >= 18:
        noteString = "Excellent";
        break;
    case note === null :
        noteString = "Invalide";
        break;
    case note >= 14:
        noteString = "Bien";
        break;
    case note >= 10:
        noteString = "Suffisant";
        break;
    default:
        noteString = "Insuffisant";
        break;
}

alert("La note est " + note + "\nVotre appréciation est: " + "\"" + noteString + "\"");