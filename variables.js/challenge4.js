const prompt = require("prompt-sync")();

const litres= prompt("The amount of fuel consumed in litres : ");
const kilomètres = prompt("Distance traveled in kilometers : ");
let Consommation = Math.trunc((litres / kilomètres) * 100);

console.log("Distance : " + kilomètres + " km");
console.log("Carburant : "+ litres + " litres");
console.log("Consommation :" + Consommation + " L/100 km");