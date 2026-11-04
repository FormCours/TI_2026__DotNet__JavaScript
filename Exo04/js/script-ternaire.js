'use strict';

let note = parseFloat(prompt("NOTE ET QUE CA SAUTE!"));

if (isNaN(note) || note < 0 || note > 20) {
    note = null;
}

const noteString = (note >= 18) ? "Excellent"
    : (note === null) ? "Invalide"
    : (note >= 14) ? "Bien"
    : (note >= 10) ? "Suffisant"
    : "Insuffisant"

alert("La note est " + note + "\nVotre appréciation est: " + "\"" + noteString + "\"");

