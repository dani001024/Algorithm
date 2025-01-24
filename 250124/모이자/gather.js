const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const n = input[0];
let family = input[1].split(" ");
family = family.map((x) => Number(x));
let MIN_VAL = Number.MAX_SAFE_INTEGER;

for (var i = 0; i < n; i++) {
  let idx = i;
  let sum = 0;
  for (var j = 0; j < n; j++) {
    sum += family[j] * Math.abs(j - idx);
  }
  if (MIN_VAL > sum) MIN_VAL = sum;
}
console.log(MIN_VAL);
