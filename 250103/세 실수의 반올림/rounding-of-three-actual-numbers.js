const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n").map((x)=>Number(x).toFixed(3));

console.log(input[0]);
console.log(input[1]);
console.log(input[2]);