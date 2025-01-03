const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = Number(input);

console.log((input*30.48).toFixed(1));

//반올림... 