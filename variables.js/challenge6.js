const prompt = require("prompt-sync")();

const partie1 = prompt("Enter score 1 : ");
const partie2 = prompt("Enter score 2 : ");
const partie3 = prompt("Enter score 3 : ");
const partie4 = prompt("Enter score 4 : ");
let sum = Number (partie1) + Number (partie2)+ Number (partie3)+ Number (partie4);
console.log("Score total : " + sum);
console.log("Moyenne : " + sum/4);