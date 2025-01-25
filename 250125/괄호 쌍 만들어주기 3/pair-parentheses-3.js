const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("");

let answer = 0;

for (var i = 0; i < input.length; i++) {
  if (input[i] == "(") {
    for (var j = i + 1; j < input.length; j++) {
      if (input[j] == ")") answer++;
    }
  }
}
console.log(answer);