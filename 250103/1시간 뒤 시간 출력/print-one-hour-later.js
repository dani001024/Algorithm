const fs = require("fs");
let input = fs.readFileSync(0).toString().split(":");

console.log((Number(input[0])+1)+":"+input[1]);