const prompt = require("prompt-sync")();

const Tension  = prompt("Enter Voltage in volts  : ");
const Intensite = prompt("Enter Amperage : ");
const Temps  = prompt("Enter Time in hours : ");
let Energie = Tension * Intensite * Temps;

//console.log("Tension : " Tension);
//console.log("Intensité : " Intensite);
//console.log("Temps : " Temps);
console.log("Énergie : " +Energie + " Wh");
