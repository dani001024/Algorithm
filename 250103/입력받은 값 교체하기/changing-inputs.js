const fs = require("fs");
let input = fs.readFileSync(0).toString();

[a,b] = input.split(" ")
console.log(b,a);