const prompt = require("prompt-sync")();
const duration = prompt("Enter the duration of the movie in minutes : ");
if(duration < 60)
console.log("Court métrage");
else if(duration >= 60 &&  duration <= 120)
console.log("Film standard");
else if(duration > 120)
console.log("Film long");
