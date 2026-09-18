const prompt = require("prompt-sync")();

const Cc  = prompt("Enter your CC note  : ");
const Projet = prompt("Enter your Project note : ");
const Examen  = prompt("Enter your final exam note : ");
let finalnote = (Cc*2 + Projet*3 + Examen*5)/10;
console.log("Controle continu : " + Cc );
console.log("Projet : "+ Projet);
console.log("Examen :"+ Examen);
console.log("Note finale :"+ finalnote);

