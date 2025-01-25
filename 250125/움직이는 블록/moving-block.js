const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// let input = "4\n2\n10\n7\n1".split("\n");
const n = Number(input[0]);

input = input.slice(1, n + 1).map((x) => Number(x));
var answer = 0;

let sum = 0;
input.forEach((cur) => (sum += cur));
const avg = sum / n;

for (var i = 0; i < n; i++) {
  if (input[i] < avg) {
    answer += Math.abs(input[i] - avg);
  }
}
console.log(answer);
