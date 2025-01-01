const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
console.log(parseInt(input[2])+parseInt(input[4])+parseInt(input[9]))