const fs = require("fs");
let a = fs.readFileSync(0).toString();
let arr = a.split(" ");
[a,b] = arr;

console.log(a*b);