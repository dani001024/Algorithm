const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((x) => Number(x));
const people = input[1].split(" ");

// 커버가능한 범위는 2m+1
var answer = 0;

for (var i = 0; i < n; i++) {
  if (people[i] == "1") {
    answer++;
    i += 2 * m;
  }
}

console.log(answer);
