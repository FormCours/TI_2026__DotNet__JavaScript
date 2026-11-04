'use strict';

let note = parseFloat(prompt("NOTE ET QUE CA SAUTE!"));

if(isNaN(note) || note < 0 || note > 20){
    note = null;
}

let noteString;
if(note >= 18){
    noteString = "Excellent";
}
else if (note === null) {
    noteString = "Incorrect";
}
else if(note >= 14){
    noteString = "Bon";
}
else if (note >= 10){
    noteString = "Suffisant";
}
else {
    noteString = "Insuffisant";
}

alert("La note est " + note + "\nVotre appréciation est: " + "\"" + noteString + "\"");