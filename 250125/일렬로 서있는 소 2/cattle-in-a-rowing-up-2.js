const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
const n = input[0];
const cow = input[1].split(" ").map((x) => Number(x));
let answer = 0;

for (var i = 0; i < n; i++) {
  for (var j = i + 1; j < n; j++) {
    for (var k = j + 1; k < n; k++) {
      if (cow[i] <= cow[j] && cow[j] <= cow[k]) {
        answer++;
      }
    }
  }
}
console.log(answer);
